import { FC, useEffect, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { StyledDetailsContainer } from './DetailsContainerStyles';
import { AnimeDetails } from '../../components';
import { fetchDetails } from '../../feature/actionCreators';
import { resetState } from '../../feature/detailsSlice';
import {
  selectDetails,
  selectDetailsError,
  selectDetailsIsLoading,
} from '../../feature/selectors';

import { FullPageLoader } from '@/components';
import { ROUTES } from '@/constants/routes';
import { useDispatch, useSelector } from '@/store';

interface DetailsContainerProps {
  id: number;
}

const DetailsContainer: FC<DetailsContainerProps> = ({ id }) => {
  const details = useSelector(selectDetails);
  const isLoading = useSelector(selectDetailsIsLoading);
  const error = useSelector(selectDetailsError);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    i18n: { language },
  } = useTranslation();

  useLayoutEffect(() => {
    dispatch(fetchDetails({ lang: language, id }));
  }, [language, id]);

  useEffect(() => {
    if (error) {
      dispatch(resetState());
      navigate(ROUTES.PAGE_NOT_FOUND);
    }
  }, [error]);

  if (isLoading) {
    return <FullPageLoader />;
  }

  return (
    <StyledDetailsContainer>
      {details && <AnimeDetails animeDetails={details} id={id} />}
    </StyledDetailsContainer>
  );
};

export default DetailsContainer;
