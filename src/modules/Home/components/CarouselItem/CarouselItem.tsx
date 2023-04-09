import {
  CalendarFill,
  ClockFill,
  PlayCircleFill,
} from '@styled-icons/bootstrap';
import { ArrowRight } from '@styled-icons/material-rounded';
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
} from './SpotlightCarouselItemStyles';

import { useMediaQuery } from '@/hooks';
import { HomePageApiResponse } from '@/mocks/homePageApi';
import { DEVICES } from '@/theme';

// eslint-disable-next-line react/function-component-definition
export default function CarouselItem({
  image,
  id,
  title,
  description,
  placement,
  duration,
  date,
  tags,
}: HomePageApiResponse) {
  const { t } = useTranslation();

  const querySM = useMediaQuery(DEVICES.SM);

  const formattedDate = date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <StyledCarouselItem imageUrl={image as string}>
      <div style={{ width: '100%' }}>
        <Series>
          #{id} {t('Spotilight')}
        </Series>
        <Title>
          <p>{title}</p>
        </Title>
        {!querySM && (
          <>
            <AdditionalInfo>
              <div>
                <PlayCircleFill />
                {placement}
              </div>
              <div>
                <ClockFill />
                {duration}
              </div>
              <div>
                <CalendarFill />
                {formattedDate}
              </div>
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
        <Description>
          <p>{description}</p>
        </Description>
        <ButtonsBlock>
          <WatchNow>
            <PlayCircleFill />
            {t('Watch Now')}
          </WatchNow>
          <Detail>
            {t('Detail')}
            <ArrowRight size="1.5rem" />
          </Detail>
        </ButtonsBlock>
      </div>
    </StyledCarouselItem>
  );
}
