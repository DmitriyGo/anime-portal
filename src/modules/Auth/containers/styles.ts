import styled from 'styled-components';

import { Control } from '@/modules/Auth/components';
import { COLORS } from '@/theme';

export const RegistrationFormWrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

export const PictureSection = styled.div`
  width: 66.66666%;
  position: relative;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: black;
    opacity: 0.15;
    z-index: 2;
  }
`;

export const ProfilePicture = styled.img`
  height: 100%;
  width: auto;
  max-width: 100%;
  object-fit: cover;
  object-position: 90%;
`;

export const FormSection = styled.div`
  width: 33.33333%;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledControl = styled(Control)`
  margin: 0 0 1rem;
`;

export const Heading = styled.h2`
  margin: 0 0 1rem;
  text-align: center;
  letter-spacing: 0.4px;
`;

export const Subheading = styled.h5`
  margin: 0 0 1rem;
  text-align: center;
  font-weight: 400;
  color: aliceblue;
  letter-spacing: 0.5px;
`;

export const SubmitButton = styled.button<{ bgtype: 'signin' | 'signup' }>`
  cursor: pointer;
  width: 100%;
  height: 3rem;
  margin: 0.75rem 0 0.5rem;
  padding: 0 16px;
  ${({ bgtype }) =>
    `background ${bgtype === 'signup' ? '#ff5566' : '#0b63da'}`};

  color: #f7f7f7;
  border: 0;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  letter-spacing: 1px;
  transition: all 0.375s;
  border-radius: 0.75rem;
  &:hover {
    ${({ bgtype }) =>
      `background ${bgtype === 'signup' ? '#964145' : '#084ba5'}`};
  }

  &:disabled {
    opacity: 0.25;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  backface-visibility: hidden;
`;

export const GoogleSignInButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  margin: 0 0 1rem;
  padding: 0 1rem;
  border: none;
  border-radius: 0.75rem;
  background-color: #fff;
  color: #737373;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #f8f8f8;
  }
`;

export const GoogleLogo = styled.img`
  width: 1.5rem;
  margin-right: 0.25rem;
`;

export const GoogleSignInButtonText = styled.span`
  all: unset;
  text-transform: none;
  font-weight: 500;
`;

export const OrText = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 1rem;
  padding: 0;
  position: relative;

  &::before,
  &::after {
    content: '';
    width: 50%;
    height: 1px;
    background-color: ${COLORS.DARK_GREY['500']};
  }

  &::before {
    margin-right: 10px;
  }

  &::after {
    margin-left: 10px;
  }
`;

export const ForgotPasswordButton = styled.button`
  all: unset;
  color: ${COLORS.PRIMARY};
  cursor: pointer;
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HaveAccountText = styled.p`
  color: ${COLORS.FONT};
`;

export const SignInButton = styled.button`
  all: unset;
  color: ${COLORS.PRIMARY};
  cursor: pointer;
`;

export const CopyrightText = styled.p`
  position: absolute;
  right: 2rem;
  bottom: 0;
  opacity: 0.5;
  pointer-events: none;
  color: #a0a6b0;
  font-family: sans-serif !important;
`;
