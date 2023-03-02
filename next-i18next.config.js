const LOCALES = {
  UK: 'uk',
  EN: 'en',
};

const DEFAULT_LOCALE = LOCALES.UK;

const SUPPORTED_LOCALES = [LOCALES.UK, LOCALES.EN];

module.exports = {
  i18n: {
    defaultLocale: DEFAULT_LOCALE,
    locales: SUPPORTED_LOCALES,
  },
};
