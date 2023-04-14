import { Globe } from '@styled-icons/boxicons-regular';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Dropdown } from '@/components';

interface LanguageSelectorProps {
  top: string;
  left: string;
}

const LanguageSelector: FC<LanguageSelectorProps> = ({ top, left }) => {
  const { i18n } = useTranslation();

  const handleClick = async (lang: string) => {
    await i18n.changeLanguage(lang);
  };

  return (
    <Dropdown icon={<Globe size="1.5rem" />} zindex={15} top={top} left={left}>
      <Button onClick={() => handleClick('en')}>English</Button>
      <Button onClick={() => handleClick('uk')}>Українська</Button>
    </Dropdown>
  );
};

export default LanguageSelector;
