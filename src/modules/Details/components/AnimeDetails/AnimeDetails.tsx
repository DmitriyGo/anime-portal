import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  AnimeDetails as StyledAnimeDetails,
  Block,
  Button,
  DetailsPart,
  MainPart,
  Poster,
  PosterBlock,
  Tag,
  Tags,
  Title,
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
      <MainPart>
        <PosterBlock>
          <Poster src={poster} alt={animeDescription.title} />
        </PosterBlock>

        <Block>
          <Title>{title}</Title>
          <Tags>
            {tags.map(({ name }, index) => (
              <Tag key={index} name={name}>
                {name}
              </Tag>
            ))}
          </Tags>
          <Button
            fontColor={COLORS.BLACK}
            color={COLORS.LIGHT_GREEN}
            onClick={onWatchNowClick}
          >
            {t('watch_now')}
          </Button>
          <Description collapsedDetailsLength={300} text={description} />
          <ScreenshotsCarousel screenshots={screenshots} />
        </Block>
      </MainPart>

      <DetailsPart>
        <Tags>
          {genres.map(({ name }, index) => (
            <Tag key={index} name={name}>
              {name}
            </Tag>
          ))}
        </Tags>

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
      </DetailsPart>
    </StyledAnimeDetails>
  );
};

export default AnimeDetails;
