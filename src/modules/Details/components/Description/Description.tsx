import { FC, useState } from 'react';

import { StyledDescription, StyledExtendButton } from './DescriptionStyles';

interface DescriptionProps {
  text: string;
}

const SLICE_END_TEXT = 450;

const Description: FC<DescriptionProps> = ({ text }) => {
  const [extended, setExtended] = useState(false);

  const extendHandle = () => {
    setExtended((prev) => !prev);
  };

  return (
    <StyledDescription>
      {extended ? text : `${text.slice(0, SLICE_END_TEXT)}...`}
      &nbsp;
      <StyledExtendButton onClick={extendHandle}>
        {extended ? 'Show less' : 'Show more'}
      </StyledExtendButton>
    </StyledDescription>
  );
};

export default Description;
