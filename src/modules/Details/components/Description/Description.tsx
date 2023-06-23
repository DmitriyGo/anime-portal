import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Description as StyledDescription,
  ExtendButton,
} from './DescriptionStyles';

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
      <ExtendButton onClick={extendHandle}>
        {extended ? t('show_less') : t('show_more')}
      </ExtendButton>
    </StyledDescription>
  );
};

export default Description;
