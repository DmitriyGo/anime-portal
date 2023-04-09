import {
  CalendarFill,
  ClockFill,
  PlayCircleFill,
} from '@styled-icons/bootstrap';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import {
  StyledCarouselItem,
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
      <Series>
        #{+id + 1} {t('Spotilight')}
      </Series>
      <Title>{title}</Title>
      {!querySM && (
        <>
          <AdditionalInfo>
            <AdditionalInfoBlock>
              <PlayCircleFill size="0.8rem" />
              {placement}
            </AdditionalInfoBlock>
            <AdditionalInfoBlock>
              <ClockFill size="0.8rem" />
              {duration}
            </AdditionalInfoBlock>
            <AdditionalInfoBlock>
              <CalendarFill size="0.8rem" />
              {formattedDate}
            </AdditionalInfoBlock>
          </AdditionalInfo>
          <Tags>
            {tags.map((tag, index) => (
              <Tag key={index} name={tag}>
                {tag}
              </Tag>
            ))}
          </Tags>
        </>
      )}
      <Description lines={!querySM ? 3 : 6}>{description}</Description>
      <ButtonsBlock>
        <WatchNow>
          <PlayCircleFill size="1rem" />
          {t('Watch Now')}
        </WatchNow>
        <Detail>
          {t('Detail')}

          <ArrowIcon size="3rem" />
        </Detail>
      </ButtonsBlock>
    </StyledCarouselItem>
  );
};

export default CarouselItem;
