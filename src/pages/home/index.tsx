import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

import { Button } from '@/components';
import { SpotlightsContainer } from '@/modules/Home/containers';

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <>
      <SpotlightsContainer />
      <Button
        style={{ width: '90%', margin: 'auto', marginTop: '10px' }}
        color={theme.colorPrimary}
        onClick={() => navigate('/todos')}
      >
        Todos
      </Button>
    </>
  );
};

export default Home;
