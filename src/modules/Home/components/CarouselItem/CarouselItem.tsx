import {
  CalendarFill,
  ClockFill,
  PlayCircleFill,
} from '@styled-icons/bootstrap';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import {
  StyledCarouselItem,
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
} from './CarouselItemStyles';

import { useMediaQuery } from '@/hooks';
import { HomePageApiResponse } from '@/mocks/homePageApi';
import { DEVICES } from '@/theme';

const CarouselItem: FC<HomePageApiResponse> = ({
  image,
  id = 0,
  title,
  description,
  placement,
  duration,
  date,
  tags,
}) => {
  const { t } = useTranslation();

  const querySM = useMediaQuery(DEVICES.SM);

  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <StyledCarouselItem imageUrl={image as string}>
      <StyledSeries>
        #{+id + 1} {t('spotilight')}
      </StyledSeries>
      <StyledTitle>{title}</StyledTitle>
      {!querySM && (
        <>
          <StyledAdditionalInfo>
            <StyledAdditionalInfoBlock>
              <PlayCircleFill size="0.8rem" />
              {placement}
            </StyledAdditionalInfoBlock>
            <StyledAdditionalInfoBlock>
              <ClockFill size="0.8rem" />
              {duration}
            </StyledAdditionalInfoBlock>
            <StyledAdditionalInfoBlock>
              <CalendarFill size="0.8rem" />
              {formattedDate}
            </StyledAdditionalInfoBlock>
          </StyledAdditionalInfo>
          <StyledTags>
            {tags.map((tag, index) => (
              <StyledTag key={index} name={tag}>
                {tag}
              </StyledTag>
            ))}
          </StyledTags>
        </>
      )}
      <StyledDescription>{description}</StyledDescription>
      <StyledButtonsBlock>
        <StyledWatchNow>
          <PlayCircleFill size="1rem" />
          {t('watch_now')}
        </StyledWatchNow>
        <StyledDetail>
          {t('details')}
          <StyledArrowIcon size="3rem" />
        </StyledDetail>
      </StyledButtonsBlock>
    </StyledCarouselItem>
  );
};

export default CarouselItem;
