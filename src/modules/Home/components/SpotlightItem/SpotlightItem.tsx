import {
  CalendarFill,
  ClockFill,
  PlayCircleFill,
} from '@styled-icons/bootstrap';
import { FC } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  SpotlightItem as StyledSpotlightItem,
  Series,
  Title,
  Description,
  ButtonsBlock,
  WatchNow,
  Detail,
  AdditionalInfo,
  Tag,
  Tags,
  AdditionalInfoBlock,
  ArrowIcon,
} from './SpotlightItemStyles';

import { ROUTES } from '@/constants/routes';
import { useMediaQuery } from '@/hooks';
import { IAnimePreview } from '@/models/anime.model';
import { DEVICES } from '@/theme';

interface SpotlightItemProps extends IAnimePreview {
  position: number;
}

const SpotlightItem: FC<SpotlightItemProps> = ({
  id,
  position,
  animeDescription,
  date,
  duration,
  spotlight,
  tags,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const querySM = useMediaQuery(DEVICES.SM);

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <StyledSpotlightItem imageUrl={spotlight}>
      <Series>
        #{position} {t('spotlight')}
      </Series>
      <Title>{animeDescription.title}</Title>
      {!querySM && (
        <>
          <AdditionalInfo>
            <AdditionalInfoBlock>
              <PlayCircleFill size="0.8rem" />
              {animeDescription.placement}
            </AdditionalInfoBlock>
            <AdditionalInfoBlock>
              <ClockFill size="0.8rem" />
              {duration}
              {t('min')}
            </AdditionalInfoBlock>
            <AdditionalInfoBlock>
              <CalendarFill size="0.8rem" />
              {formattedDate}
            </AdditionalInfoBlock>
          </AdditionalInfo>
          <Tags>
            {tags.map(({ name }, index) => (
              <Tag key={index} name={name}>
                {name}
              </Tag>
            ))}
          </Tags>
        </>
      )}
      <Description>{animeDescription.description}</Description>
      <ButtonsBlock>
        <WatchNow onClick={() => navigate(`${ROUTES.WATCH}/${id}`)}>
          <PlayCircleFill size="1rem" />
          {t('watch_now')}
        </WatchNow>
        <Detail onClick={() => navigate(`${ROUTES.DETAILS}/${id}`)}>
          {t('details')}
          <ArrowIcon size="3rem" />
        </Detail>
      </ButtonsBlock>
    </StyledSpotlightItem>
  );
};

export default React.memo(SpotlightItem);
