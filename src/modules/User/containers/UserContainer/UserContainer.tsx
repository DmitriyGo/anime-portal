import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { StyledUserContainer } from './UserContainerStyles';

import { Button } from '@/components';
import { logOut } from '@/modules/Auth';
import { selectUserData } from '@/modules/Auth/feature/selectors';
import { selectIsAuthorized } from '@/modules/Auth/feature/selectors';
import { useDispatch, useSelector } from '@/store';

interface UserContainerProps {
  animeId: string;
}

const UserContainer: FC<UserContainerProps> = () => {
  const user = useSelector(selectUserData);
  const isAutorized = useSelector(selectIsAuthorized);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOutClick = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <StyledUserContainer>
      <div>
        <pre>is autorized - {JSON.stringify(isAutorized, null, ' ')}</pre>
        <pre>user - {JSON.stringify(user, null, ' ')}</pre>
        <Button onClick={handleLogOutClick}>Log Out</Button>
      </div>
    </StyledUserContainer>
  );
};

export default UserContainer;
