import { useNavigate } from 'react-router-dom';

import { Button } from '@/components';
import { SpotlightsContainer } from '@/modules/Home/containers';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <SpotlightsContainer />
      <Button
        onClick={() => {
          navigate('/todos');
        }}
      >
        Todos
      </Button>
    </>
  );
};

export default Home;
