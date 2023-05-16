import { FC, useState } from 'react';

import { StyledDetailsContainer } from './DetailsContainerStyles';

interface DetailsContainerProps {
  animeId: string;
}

interface IMock {
  id: number;
  title: {
    uk: string;
    en: string;
  };
  poster: string;
  rating: string;
  score: number;
  date: string;
  genres: {
    uk: string[];
    en: string[];
  };
  status: {
    uk: string;
    en: string;
  };
  description: {
    uk: string;
    en: string;
  };
  length: number;
}

const Mock: IMock = {
  id: 100,
  title: {
    uk: 'Ван Піс',
    en: 'One Piece',
  },
  poster:
    'https://img.zorores.com/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg',
  rating: 'PG-13',
  score: 7.0,
  date: 'Oct 20, 1999',
  genres: {
    uk: ['Бойовик', 'Пригодницька', 'Comedy', 'Drama'],
    en: ['Action', 'Adventure', 'Comedy', 'Drama'],
  },
  status: {
    uk: 'Наразі в ефірі',
    en: 'Currently Airing',
  },
  description: {
    uk: 'Золотий Роджер був відомий як "Король піратів", найсильніший і найвідоміший з тих, хто плавав Великою лінією. Захоплення і страта Роджера Світовим Урядом принесла зміни в усьому світі. Його останні слова перед смертю розкрили існування найбільшого скарбу у світі - Єдиного Шматка. Саме це одкровення призвело до Великої Епохи Піратів, людей, які мріяли знайти One Piece, що обіцяє необмежену кількість багатства і слави, і, цілком можливо, вершину слави і титул Піратського Короля. Зустрічайте Мавпочку Луффі, 17-річного хлопця, який кидає виклик вашому стандартному визначенню пірата. На відміну від популярного образу злого, запеклого, беззубого пірата, що грабує села заради розваги, Луффі став піратом з чистого дива: думка про захопливу пригоду, яка приведе його до інтригуючих людей і, врешті-решт, до обіцяного скарбу. Йдучи слідами свого героя дитинства, Луффі та його команда подорожують Великою Лінією, переживаючи божевільні пригоди, розкриваючи темні таємниці та борючись із сильними ворогами, і все це заради того, щоб дістатися до найбажанішого з усіх багатств - Єдиного Шматка.',
    en: "Gold Roger was known as the 'Pirate King', the strongest and most infamous being to have sailed the Grand Line. The capture and execution of Roger by the World Government brought a change throughout the world. His last words before his death revealed the existence of the greatest treasure in the world, One Piece. It was this revelation that brought about the Grand Age of Pirates, men who dreamed of finding One Piece—which promises an unlimited amount of riches and fame—and quite possibly the pinnacle of glory and the title of the Pirate King. Enter Monkey Luffy, a 17-year-old boy who defies your standard definition of a pirate. Rather than the popular persona of a wicked, hardened, toothless pirate ransacking villages for fun, Luffy's reason for being a pirate is one of pure wonder: the thought of an exciting adventure that leads him to intriguing people and ultimately, the promised treasure. Following in the footsteps of his childhood hero, Luffy and his crew travel across the Grand Line, experiencing crazy adventures, unveiling dark mysteries and battling strong enemies, all in order to reach the most coveted of all fortunes—One Piece",
  },
  length: 23,
};

const DetailsContainer: FC<DetailsContainerProps> = ({ animeId }) => {
  // const [loading, setLoading] = useState(true);
  const [anime, setAnime] = useState<IMock>(Mock);

  // const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchAnime = async () => {
  //     try {
  //       const response = await AnimeAPI.getAnimeById(animeId);

  //       setAnime(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       navigate(ROUTES.PAGE_NOT_FOUND);
  //     }
  //   };

  //   fetchAnime();
  // }, []);

  // if (loading) {
  //   return <FullPageLoader />;
  // }

  return (
    <StyledDetailsContainer>
      <div>
        <pre>{JSON.stringify(anime, null, ' ')}</pre>
      </div>
    </StyledDetailsContainer>
  );
};

export default DetailsContainer;
