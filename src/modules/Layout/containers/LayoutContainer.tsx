import { useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, SideBar } from '../components';

const Layout = () => {
  const [sidebarShown, setSidebarShown] = useState(false);

  const toggleSidebar = useCallback(() => {
    setSidebarShown((show) => !show);
  }, []);

  // Applies "overflow: hidden" to the body element when the sidebar is shown
  useEffect(() => {
    if (sidebarShown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [sidebarShown]);

  return (
    <>
      <Header onMenuClick={toggleSidebar} />
      {sidebarShown && <SideBar onClose={toggleSidebar} />}
      <Outlet />
      {/* TODO footer */}
    </>
  );
};

export default Layout;
