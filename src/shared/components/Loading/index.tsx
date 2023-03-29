import { StyledLoading } from './styles';

import gif from '/loading.gif';

const Loading = () => {
  return (
    <StyledLoading>
      <img height={100} src={gif} alt="loading gif" />
    </StyledLoading>
  );
};

export default Loading;
