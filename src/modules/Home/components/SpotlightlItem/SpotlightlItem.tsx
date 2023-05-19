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
  StyledSpotlightItem,
  StyledSeries,
  StyledTitle,
  StyledDescription,
  StyledButtonsBlock,
  StyledWatchNow,
  StyledDetail,
  StyledAdditionalInfo,
  StyledTag,
  StyledTags,
  StyledAdditionalInfoBlock,
  StyledArrowIcon,
} from './SpotlightItemStyles';

import { ROUTES } from '@/constants/routes';
import { useMediaQuery } from '@/hooks';
import { IAnimePrewiew } from '@/models/anime.model';
import { DEVICES } from '@/theme';

interface SpotlightlItemProps extends IAnimePrewiew {
  position: number;
}

const SpotlightlItem: FC<SpotlightlItemProps> = ({
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
      <StyledSeries>
        #{position} {t('spotilight')}
      </StyledSeries>
      <StyledTitle>{animeDescription.title}</StyledTitle>
      {!querySM && (
        <>
          <StyledAdditionalInfo>
            <StyledAdditionalInfoBlock>
              <PlayCircleFill size="0.8rem" />
              {animeDescription.placement}
            </StyledAdditionalInfoBlock>
            <StyledAdditionalInfoBlock>
              <ClockFill size="0.8rem" />
              {duration}
              {t('min')}
            </StyledAdditionalInfoBlock>
            <StyledAdditionalInfoBlock>
              <CalendarFill size="0.8rem" />
              {formattedDate}
            </StyledAdditionalInfoBlock>
          </StyledAdditionalInfo>
          <StyledTags>
            {tags.map(({ name }, index) => (
              <StyledTag key={index} name={name}>
                {name}
              </StyledTag>
            ))}
          </StyledTags>
        </>
      )}
      <StyledDescription>{animeDescription.description}</StyledDescription>
      <StyledButtonsBlock>
        <StyledWatchNow onClick={() => navigate(`${ROUTES.WATCH}/${id}`)}>
          <PlayCircleFill size="1rem" />
          {t('watch_now')}
        </StyledWatchNow>
        <StyledDetail onClick={() => navigate(`${ROUTES.DETAILS}/${id}`)}>
          {t('details')}
          <StyledArrowIcon size="3rem" />
        </StyledDetail>
      </StyledButtonsBlock>
    </StyledSpotlightItem>
  );
};

export default React.memo(SpotlightlItem);
