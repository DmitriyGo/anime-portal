import { useCallback, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Header, SideBar } from '../../components';

import { HEADER_EXCLUDED_ROUTES } from '@/models/layout.model';

const Layout = () => {
  const [sidebarShown, setSidebarShown] = useState(false);
  const [headerShown, setHeaderShown] = useState(false);

  const { pathname } = useLocation();

  useEffect(() => {
    setHeaderShown(
      !HEADER_EXCLUDED_ROUTES.some((path) => pathname.includes(path)),
    );
  }, [pathname]);

  const toggleSidebar = useCallback(() => {
    setSidebarShown((show) => !show);
  }, []);

  useEffect(() => {
    if (sidebarShown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [sidebarShown]);

  return (
    <>
      {headerShown && <Header onMenuClick={toggleSidebar} />}
      {sidebarShown && <SideBar onClose={toggleSidebar} />}
      <Outlet />
      {/* TODO footer */}
    </>
  );
};

export default Layout;
