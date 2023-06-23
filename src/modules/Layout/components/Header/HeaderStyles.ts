import styled from 'styled-components';

import { COLORS, DEVICES } from '@/theme';

export const Header = styled.header<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  padding: 0.75rem 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  transform: translateY(${({ visible }) => (visible ? '0' : '-100%')});
  background-color: ${COLORS.BACKGROUND};
  transition: transform 0.3s cubic-bezier(0.45, 0.05, 0.55, 0.95);
`;

export const Block = styled.div<{ gap?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: ${({ gap }) => gap ?? '1.5rem'};

  @media ${DEVICES.XS} {
    gap: 1rem;
  }
`;

export const ListBlock = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 1.5rem;

  @media ${DEVICES.XS} {
    gap: 1rem;
  }
`;

export const ListItem = styled.li`
  list-style-type: none;
`;
