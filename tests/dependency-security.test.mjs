import assert from 'node:assert/strict';
import test from 'node:test';
import qs from 'qs';
import serialize from 'serialize-javascript';

test('comma query serialization tolerates non-callable own toString properties', () => {
  const input = JSON.parse('{"a":[{"toString":"x"}]}');
  for (const encodeValuesOnly of [false, true]) {
    assert.doesNotThrow(() => qs.stringify(input, { arrayFormat: 'comma', encodeValuesOnly }));
  }
  assert.equal(qs.stringify({ a: ['x', 'y'] }, { arrayFormat: 'comma' }), 'a=x%2Cy');
});

test('serialized function boundaries cannot terminate an embedding script element', () => {
  function f() {}
  function g() {}
  f.toString = () => 'function f(){ return 1 }//</script';
  g.toString = () => 'function g(x){ return x } > <img src=x onerror=alert(1)>';
  const output = serialize({ a: { f }, g }, { space: 2 });
  assert.doesNotMatch(output, /<\/script(?:[\t\n\f\r />]|$)/i);
  assert.match(serialize({ plain: 'safe' }), /"plain":"safe"/);
});
