import { useCallback, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Login, SideBar } from '../components';

const Layout = () => {
  const [sidebarShown, setSidebarShown] = useState(false);
  const [loginShown, setLoginShown] = useState(false);

  const toggleSidebar = useCallback(() => {
    setSidebarShown((show) => !show);
  }, []);

  const toggleLogin = useCallback(() => {
    setLoginShown((show) => !show);
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
      <Header onMenuClick={toggleSidebar} onLoginClick={toggleLogin} />
      {sidebarShown && <SideBar onClose={toggleSidebar} />}
      {loginShown && <Login onClose={toggleLogin} />}
      <Outlet />
      {/* TODO footer */}
    </>
  );
};

export default Layout;
