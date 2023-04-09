import { Globe } from '@styled-icons/boxicons-regular';
import { useTranslation } from 'react-i18next';

import { Button, Dropdown } from '@/components';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleClick = async (lang: string) => {
    await i18n.changeLanguage(lang);
  };

  return (
    <Dropdown icon={<Globe size="1.5rem" />} zindex={15}>
      <Button onClick={() => handleClick('en')}>English</Button>
      <Button onClick={() => handleClick('uk')}>Українська</Button>
    </Dropdown>
  );
};

export default LanguageSelector;
