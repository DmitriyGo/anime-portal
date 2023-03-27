export const TRANSLATION_SLICE_NAME = 'translation';

export enum SupportedLanguage {
  UK = 'uk',
  EN = 'en',
}

export interface TranslationState {
  lang: SupportedLanguage;
}

export const initialState: TranslationState = {
  lang: SupportedLanguage.UK,
};
