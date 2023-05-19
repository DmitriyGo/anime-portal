import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  StyledAnimeDetails,
  StyledBlock,
  StyledDetailsPart,
  StyledMainPart,
  StyledPoster,
} from './AnimeDetailsStyles';
import { Description } from '..';

import { Button } from '@/components';
import { ROUTES } from '@/constants/routes';
import { IAnimeDetails } from '@/models/anime.model';

interface AnimeDetailsProps {
  animeDetails: IAnimeDetails;
  id: number;
}

const AnimeDetails: FC<AnimeDetailsProps> = ({ animeDetails, id }) => {
  const navigate = useNavigate();

  const { animeDescription, poster, rating, screenshots, studio, tags } =
    animeDetails;

  const onWatchNowClick = () => {
    navigate(`${ROUTES.WATCH}/${id}`);
  };

  return (
    <StyledAnimeDetails>
      <StyledMainPart>
        <StyledBlock>
          <StyledPoster src={poster} alt={animeDescription.title} />
        </StyledBlock>

        <StyledBlock>
          <h2>{animeDescription.title}</h2>
          <Description text={animeDescription.description} />
          <>
            {screenshots.map((screenshot, index) => (
              <img key={index} src={screenshot} />
            ))}
          </>
          <Button onClick={onWatchNowClick}>Watch Now</Button>
        </StyledBlock>
      </StyledMainPart>

      <StyledDetailsPart>
        <p>{rating}</p>
        <p>{studio}</p>
        <>
          {tags.map((tag, index) => (
            <p key={index}>{tag.name}</p>
          ))}
        </>
      </StyledDetailsPart>
    </StyledAnimeDetails>
  );
};

export default AnimeDetails;
