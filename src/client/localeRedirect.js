import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const SUPPORTED_LOCALES = [
  'bg', 'cs', 'da', 'de', 'el', 'en', 'es', 'et', 'fi', 'fr', 'ga', 'hr',
  'hu', 'it', 'lt', 'lv', 'mt', 'nl', 'pl', 'pt', 'ro', 'sk', 'sl', 'sv',
];

const DEFAULT_LOCALE = 'en';
const STORAGE_KEY = 'omi.preferredLocale';
const PERSIST_QUERY = 'persistLocale';

function normalizeLocale(value) {
  if (!value) return null;
  const base = value.toLowerCase().split('-')[0];
  return SUPPORTED_LOCALES.includes(base) ? base : null;
}

function localeFromPathname(pathname) {
  const firstSegment = pathname.split('/').filter(Boolean)[0];
  return SUPPORTED_LOCALES.includes(firstSegment) ? firstSegment : DEFAULT_LOCALE;
}

function preferredBrowserLocale() {
  const languages = Array.isArray(navigator.languages) && navigator.languages.length
    ? navigator.languages
    : [navigator.language];

  for (const language of languages) {
    const locale = normalizeLocale(language);
    if (locale) return locale;
  }

  return DEFAULT_LOCALE;
}

function cleanPersistenceQuery(url) {
  url.searchParams.delete(PERSIST_QUERY);
  const query = url.searchParams.toString();
  const cleanUrl = `${url.pathname}${query ? `?${query}` : ''}${url.hash}`;
  window.history.replaceState(window.history.state, '', cleanUrl);
}

if (ExecutionEnvironment.canUseDOM) {
  const url = new URL(window.location.href);

  // The Docusaurus locale dropdown appends this parameter. Treat that as an
  // explicit user choice and remember it for future visits to the bare root.
  if (url.searchParams.get(PERSIST_QUERY) === 'true') {
    const selectedLocale = localeFromPathname(url.pathname);
    window.localStorage.setItem(STORAGE_KEY, selectedLocale);
    cleanPersistenceQuery(url);
  } else if (url.pathname === '/' || url.pathname === '') {
    const storedLocale = normalizeLocale(window.localStorage.getItem(STORAGE_KEY));
    const targetLocale = storedLocale ?? preferredBrowserLocale();

    if (targetLocale !== DEFAULT_LOCALE) {
      const target = new URL(window.location.href);
      target.pathname = `/${targetLocale}/`;
      window.location.replace(target.toString());
    }
  }
}
