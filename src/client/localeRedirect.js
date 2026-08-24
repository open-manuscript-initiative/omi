import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const SUPPORTED_LOCALES = [
  'bg', 'cs', 'da', 'de', 'el', 'en', 'es', 'et', 'fi', 'fr', 'ga', 'hr',
  'hu', 'it', 'lt', 'lv', 'mt', 'nl', 'pl', 'pt', 'ro', 'sk', 'sl', 'sv',
];

const DEFAULT_LOCALE = 'en';
const STORAGE_KEY = 'omi.preferredLocale';

function normalizeLocale(value) {
  if (!value) return null;
  const base = value.toLowerCase().split('-')[0];
  return SUPPORTED_LOCALES.includes(base) ? base : null;
}

function explicitLocaleFromPathname(pathname) {
  const firstSegment = pathname.split('/').filter(Boolean)[0];
  return SUPPORTED_LOCALES.includes(firstSegment) ? firstSegment : null;
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

if (ExecutionEnvironment.canUseDOM) {
  const {pathname} = window.location;
  const isRoot = pathname === '/' || pathname === '';

  if (!isRoot) {
    const selectedLocale = explicitLocaleFromPathname(pathname);
    if (selectedLocale) window.localStorage.setItem(STORAGE_KEY, selectedLocale);
  } else {
    const storedLocale = normalizeLocale(window.localStorage.getItem(STORAGE_KEY));
    const targetLocale = storedLocale ?? preferredBrowserLocale();

    if (targetLocale !== DEFAULT_LOCALE) {
      const target = new URL(window.location.href);
      target.pathname = `/${targetLocale}/`;
      window.location.replace(target.toString());
    }
  }
}
