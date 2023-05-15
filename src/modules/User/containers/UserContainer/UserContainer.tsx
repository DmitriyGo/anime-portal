import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledUserContainer } from './UserContainerStyles';

import { Button } from '@/components';
import { AUTHORIZATION_TOKEN_STORAGE_KEY } from '@/constants/common';
import { logOut } from '@/modules/Auth';
import { selectUserData } from '@/modules/Auth';
import { useDispatch, useSelector } from '@/store';

interface UserContainerProps {
  animeId: string;
}

const UserContainer: FC<UserContainerProps> = () => {
  const user = useSelector(selectUserData);
  const isAuthorized = localStorage.getItem(AUTHORIZATION_TOKEN_STORAGE_KEY);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOutClick = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <StyledUserContainer>
      <div>
        <pre>Is authorized - {JSON.stringify(isAuthorized, null, 2)}</pre>
        <pre>User - {JSON.stringify(user, null, 2)}</pre>
        <Button onClick={handleLogOutClick}>Log Out</Button>
      </div>
    </StyledUserContainer>
  );
};

export default UserContainer;
