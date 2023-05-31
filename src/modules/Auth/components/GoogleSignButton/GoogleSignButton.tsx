import React, { FC, PropsWithChildren } from 'react';

import {
  GoogleLogo,
  GoogleSignInButton,
  GoogleSignInButtonText,
} from './styles';

import googleSvg from '@/assets/sign/google.svg';

const GoogleSignButton: FC<PropsWithChildren> = ({ children }) => {
  return (
    <GoogleSignInButton href="#">
      <GoogleLogo src={googleSvg} alt="" />
      <GoogleSignInButtonText>{children}</GoogleSignInButtonText>
    </GoogleSignInButton>
  );
};

export default GoogleSignButton;
