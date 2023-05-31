import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  StyledAnimeDetails,
  StyledBlock,
  StyledButton,
  StyledDetailsPart,
  StyledMainPart,
  StyledPoster,
  StyledPosterBlock,
  StyledTag,
  StyledTags,
  StyledTitle,
} from './AnimeDetailsStyles';
import Description from '../Description/Description';
import ScreenshotsCarousel from '../ScreenshotsCarousel/ScreenshotsCarousel';

import { ROUTES } from '@/constants/routes';
import { useMediaQuery } from '@/hooks';
import { IAnimeDetails } from '@/models/anime.model';
import { COLORS, DEVICES } from '@/theme';

interface AnimeDetailsProps {
  animeDetails: IAnimeDetails;
  id: number;
}

const AnimeDetails: FC<AnimeDetailsProps> = ({ animeDetails, id }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const queryMD = useMediaQuery(DEVICES.MD);

  const { animeDescription, poster, rating, screenshots, studio, tags } =
    animeDetails;
  const { description, genres, placement, status, title } = animeDescription;

  const onWatchNowClick = () => {
    navigate(`${ROUTES.WATCH}/${id}`);
  };

  return (
    <StyledAnimeDetails>
      <StyledMainPart>
        <StyledPosterBlock>
          <StyledPoster src={poster} alt={animeDescription.title} />
        </StyledPosterBlock>

        <StyledBlock>
          <StyledTitle>{title}</StyledTitle>
          <StyledTags>
            {tags.map(({ name }, index) => (
              <StyledTag key={index} name={name}>
                {name}
              </StyledTag>
            ))}
          </StyledTags>
          <StyledButton
            fontColor={COLORS.BLACK}
            color={COLORS.LIGHT_GREEN}
            onClick={onWatchNowClick}
          >
            {t('watch_now')}
          </StyledButton>
          <Description collapsedDetailsLength={300} text={description} />
          <ScreenshotsCarousel screenshots={screenshots} />
        </StyledBlock>
      </StyledMainPart>

      <StyledDetailsPart>
        <StyledTags>
          {genres.map(({ name }, index) => (
            <StyledTag key={index} name={name}>
              {name}
            </StyledTag>
          ))}
        </StyledTags>

        <p>
          {t('rating')} - {rating}
        </p>
        <p>
          {t('studio')} - {studio}
        </p>
        <p>
          {t('status')} - {status}
        </p>
        <p>
          {t('placement')} - {placement}
        </p>
      </StyledDetailsPart>
    </StyledAnimeDetails>
  );
};

export default AnimeDetails;
