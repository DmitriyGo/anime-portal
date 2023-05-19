import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { StyledDescription, StyledExtendButton } from './DescriptionStyles';

interface DescriptionProps {
  text: string;
  collapsedDetailsLength: number;
}

const Description: FC<DescriptionProps> = ({
  text,
  collapsedDetailsLength,
}) => {
  const [extended, setExtended] = useState(false);

  const { t } = useTranslation();

  const extendHandle = () => {
    setExtended((prev) => !prev);
  };

  return (
    <StyledDescription>
      {extended ? text : `${text.slice(0, collapsedDetailsLength)}...`}
      &nbsp;
      <StyledExtendButton onClick={extendHandle}>
        {extended ? t('show_less') : t('show_more')}
      </StyledExtendButton>
    </StyledDescription>
  );
};

export default Description;
