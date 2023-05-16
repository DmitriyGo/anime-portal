import { useNavigate } from 'react-router-dom';

import { StyledProfileContainer } from './ProfileContainerStyles';

import { Button } from '@/components';
import { AUTHORIZATION_TOKEN_STORAGE_KEY } from '@/constants/common';
import { ROUTES } from '@/constants/routes';
import { logout, selectUserData } from '@/modules/Auth';
import { useDispatch, useSelector } from '@/store';

const ProfileContainer = () => {
  const user = useSelector(selectUserData);
  const isAuthorized = localStorage.getItem(AUTHORIZATION_TOKEN_STORAGE_KEY);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOutClick = () => {
    dispatch(logout());
    navigate(ROUTES.HOME);
  };

  return (
    <StyledProfileContainer>
      <div>
        <pre>Is authorized - {JSON.stringify(isAuthorized, null, 2)}</pre>
        <pre>User - {JSON.stringify(user, null, 2)}</pre>
        <Button onClick={handleLogOutClick}>Log Out</Button>
      </div>
    </StyledProfileContainer>
  );
};

export default ProfileContainer;
