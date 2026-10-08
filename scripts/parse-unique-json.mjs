/** Parse JSON bytes or text without duplicate-name or lossy-number ambiguity. */
export function parseUniqueJson(source) {
  let index = 0;
  let text;
  try {
    text = typeof source === 'string'
      ? source
      : new TextDecoder('utf-8', { fatal: true }).decode(source);
  } catch {
    throw parserError('INVALID_UTF8', 'Input is not valid UTF-8', '/', 0);
  }

  function fail(message) {
    throw parserError('INVALID_JSON', message, '/', index);
  }

  function whitespace() {
    while (index < text.length && /[\u0009\u000a\u000d\u0020]/.test(text[index])) index += 1;
  }

  function string(path) {
    const start = index;
    if (text[index] !== '"') fail('Expected a JSON string');
    index += 1;
    while (index < text.length) {
      const character = text[index];
      if (character === '"') {
        index += 1;
        const decoded = JSON.parse(text.slice(start, index));
        for (let offset = 0; offset < decoded.length; offset += 1) {
          const code = decoded.charCodeAt(offset);
          if (code >= 0xD800 && code <= 0xDBFF) {
            const next = decoded.charCodeAt(offset + 1);
            if (!(next >= 0xDC00 && next <= 0xDFFF)) {
              throw parserError('INVALID_UNICODE', 'Unpaired high surrogate', path, index);
            }
            offset += 1;
          } else if (code >= 0xDC00 && code <= 0xDFFF) {
            throw parserError('INVALID_UNICODE', 'Unpaired low surrogate', path, index);
          }
        }
        return decoded;
      }
      if (character === '\\') {
        index += 1;
        if (index >= text.length) fail('Unterminated escape sequence');
        index += text[index] === 'u' ? 5 : 1;
        continue;
      }
      if (character.charCodeAt(0) < 0x20) fail('Unescaped control character');
      index += 1;
    }
    fail('Unterminated JSON string');
  }

  function value(path) {
    whitespace();
    const character = text[index];
    if (character === '{') return object(path);
    if (character === '[') return array(path);
    if (character === '"') return string(path);
    const start = index;
    while (index < text.length && !/[\u0009\u000a\u000d\u0020,\]}]/.test(text[index])) index += 1;
    if (start === index) fail('Expected a JSON value');
    const parsed = JSON.parse(text.slice(start, index));
    if (typeof parsed === 'number' && !Number.isFinite(parsed)) {
      throw parserError('NON_FINITE_NUMBER', 'Number is not finite in the interoperable JSON model', path, start);
    }
    if (typeof parsed === 'number' && Number.isInteger(parsed) && !Number.isSafeInteger(parsed)) {
      throw parserError('UNSAFE_INTEGER', 'Integer is outside the interoperable JSON range', path, start);
    }
    return parsed;
  }

  function object(path) {
    const result = {};
    const names = new Set();
    index += 1;
    whitespace();
    if (text[index] === '}') { index += 1; return result; }
    while (index < text.length) {
      whitespace();
      const key = string(path);
      const childPath = `${path}/${escapePointer(key)}`;
      if (names.has(key)) {
        throw parserError('DUPLICATE_KEY', `Duplicate JSON member ${JSON.stringify(key)}`, childPath, index);
      }
      names.add(key);
      whitespace();
      if (text[index] !== ':') fail('Expected colon after object member name');
      index += 1;
      Object.defineProperty(result, key, {
        value: value(childPath),
        enumerable: true,
        configurable: true,
        writable: true,
      });
      whitespace();
      if (text[index] === '}') { index += 1; return result; }
      if (text[index] !== ',') fail('Expected comma or closing brace');
      index += 1;
    }
    fail('Unterminated JSON object');
  }

  function array(path) {
    const result = [];
    index += 1;
    whitespace();
    if (text[index] === ']') { index += 1; return result; }
    while (index < text.length) {
      result.push(value(`${path}/${result.length}`));
      whitespace();
      if (text[index] === ']') { index += 1; return result; }
      if (text[index] !== ',') fail('Expected comma or closing bracket');
      index += 1;
    }
    fail('Unterminated JSON array');
  }

  const result = value('');
  whitespace();
  if (index !== text.length) fail('Unexpected trailing content');
  return result;
}

function parserError(code, message, pointer, position) {
  const error = new SyntaxError(`${message} at ${pointer || '/'} (position ${position}).`);
  error.code = code;
  error.pointer = pointer || '/';
  error.position = position;
  return error;
}

function escapePointer(value) {
  return value.replaceAll('~', '~0').replaceAll('/', '~1');
}
