import { Search } from '@styled-icons/boxicons-regular';
import styled from 'styled-components';

import { Button } from '@/components';
import { COLORS, FONT_SIZES } from '@/theme';

export const SearchForm = styled.form<{
  $mode: boolean;
  $show: boolean;
}>`
  display: ${(props) => (!props.$mode && !props.$show ? 'none' : 'flex')};
  height: ${(props) => (props.$mode ? '2.5rem' : '3rem')};
  width: ${(props) => (props.$mode ? '25rem' : '100%')};
  align-items: center;
  background-color: ${COLORS.WHITE};
  border: 2px solid ${COLORS.GREY[100]};
  position: ${(props) => (props.$show ? 'absolute' : 'static')};
  top: ${(props) => (props.$show ? '4rem' : 'auto')};
  left: ${(props) => (props.$show ? '0' : 'auto')};
  justify-content: ${(props) => (props.$show ? 'space-between' : 'normal')};
  border-bottom: ${(props) =>
    props.$show ? `2px solid ${COLORS.BACKGROUND}` : 'none'};
  border-right: none;
  border-left: none;
  border-radius: ${(props) => (props.$mode ? '5px' : '0')};
  padding: 0 0.75rem;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;
`;

export const SearchIcon = styled(Search)`
  color: ${COLORS.BLACK};
  height: 100%;
`;

export const Input = styled.input`
  all: unset;
  width: 100%;
  height: 100%;
  font-weight: 400;
  background-color: ${COLORS.WHITE};
  color: ${COLORS.BLACK};
`;

export const InputButton = styled(Button)`
  padding: 0.25rem;
  border-radius: 0.1rem;
  font-size: ${FONT_SIZES['10']};
`;
