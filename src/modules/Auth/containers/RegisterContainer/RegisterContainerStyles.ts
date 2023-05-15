import styled from 'styled-components';

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
  margin-top: 4rem;
  padding: 1.5rem;
`;

export const Heading = styled.h2`
  margin-bottom: 0.75rem;
  text-align: center;
  letter-spacing: 0.4px;
`;

export const Subheading = styled.h5`
  text-align: center;
  font-weight: 400;
  color: aliceblue;
  letter-spacing: 0.5px;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 3rem;
  margin: 0.75rem 0 0.5rem;
  padding: 0 16px;
  background: #ff5566;
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
    background-color: #964145;
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

export const ForgotPasswordButton = styled.button`
  all: unset;
  color: ${COLORS.PRIMARY};
  cursor: pointer;
  align-self: center;
`;

export const HaveAccountText = styled.p`
  align-self: center;
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
