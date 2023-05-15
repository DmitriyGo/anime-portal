import styled from 'styled-components';

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
  padding: 1rem;
`;

export const Heading = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export const SubmitButton = styled.button`
  cursor: pointer;
  width: 100%;
  height: 3rem;
  margin-top: 1rem;
  padding: 0 16px;
  background: #f76975;
  color: #f7f7f7;
  border: 0;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 600;
  text-align: center;
  letter-spacing: 1px;
  transition: all 0.375s;
  border-radius: 0.25rem;

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
