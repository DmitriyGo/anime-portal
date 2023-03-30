import { useTranslation } from 'react-i18next';

import { StyledLanguageSelector } from './LanguageSelectorStyles';

import { Button } from '@/components';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleClick = async (lang: string) => {
    await i18n.changeLanguage(lang);
  };

  return (
    <StyledLanguageSelector>
      <Button onClick={() => handleClick('uk')}>uk</Button>
      <Button onClick={() => handleClick('en')}>en</Button>
    </StyledLanguageSelector>
  );
};

export default LanguageSelector;
