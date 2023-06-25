import { useCallback, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { ContentWrapper } from './LayoutContainerStyles';
import { Header, SideBar } from '../../components';

import { useDisableScroll } from '@/hooks';
import { HEADER_EXCLUDED_ROUTES } from '@/models/layout.model';

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

  const toggleSidebar = useCallback(() => {
    setSidebarShown((show) => !show);
  }, []);

  return (
    <>
      {headerShown && (
        <Header onMenuClick={toggleSidebar} active={sidebarShown} />
      )}
      <SideBar open={sidebarShown} onClose={toggleSidebar} />
      <ContentWrapper blurred={sidebarShown}>
        <Outlet />
      </ContentWrapper>
      {/* TODO footer */}
    </>
  );
};

export default Layout;
