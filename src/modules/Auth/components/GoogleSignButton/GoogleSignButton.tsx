import React, { FC, PropsWithChildren } from 'react';

import {
  GoogleLogo,
  GoogleSignInButton,
  GoogleSignInButtonText,
} from './styles';

import googleSvg from '@/assets/sign/google.svg';
import {
  CLIENT_URL,
  API_URL,
  AUTHORIZATION_STORAGE_KEY,
} from '@/constants/common';

const GoogleSignButton: FC<PropsWithChildren> = ({ children }) => {
  const handleClick = async () => {
    localStorage.setItem(AUTHORIZATION_STORAGE_KEY, 'true');
    window.location.href = `${API_URL}/google-auth/google?returnUrl=${CLIENT_URL}`;
  };

  return (
    <GoogleSignInButton onClick={handleClick}>
      <GoogleLogo src={googleSvg} alt="" />
      <GoogleSignInButtonText>{children}</GoogleSignInButtonText>
    </GoogleSignInButton>
  );
};

export default GoogleSignButton;
