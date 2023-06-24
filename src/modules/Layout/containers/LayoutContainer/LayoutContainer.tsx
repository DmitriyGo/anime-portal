import { useCallback, useEffect, useMemo, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { ContentWrapper } from './LayoutContainerStyles';
import colorModifier from '../../../../shared/utils/colorModifier';
import { Header, SideBar } from '../../components';

import { useDisableScroll } from '@/hooks';
import { HEADER_EXCLUDED_ROUTES } from '@/models/layout.model';
import { COLORS } from '@/theme';

const Layout = () => {
  const [sidebarShown, setSidebarShown] = useState(false);
  const [headerShown, setHeaderShown] = useState(false);

  const { pathname } = useLocation();

  useDisableScroll(sidebarShown);

  useEffect(() => {
    setHeaderShown(
      !HEADER_EXCLUDED_ROUTES.some((path) => pathname.includes(path)),
    );
  }, [pathname]);

  const ScrollbarThumbColorChanger = createGlobalStyle`
    ::-webkit-scrollbar-thumb {
      background-color: ${
        sidebarShown ? `${COLORS.DARK_GREY[500]} !important` : COLORS.PRIMARY
      };
    } 
  `;

  const toggleSidebar = useCallback(() => {
    setSidebarShown((show) => !show);
  }, []);

  return (
    <>
      <ScrollbarThumbColorChanger />
      {headerShown && (
        <Header onMenuClick={toggleSidebar} active={sidebarShown} />
      )}
      <SideBar open={sidebarShown} onClose={toggleSidebar} />
      <ContentWrapper>
        <Outlet />
      </ContentWrapper>
      {/* TODO footer */}
    </>
  );
};

export default Layout;
