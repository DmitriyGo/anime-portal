import { useCallback, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, SideBar } from '../components';

const Layout = () => {
  const [sidebarShown, setSidebarShown] = useState(false);

  const toggleSidebar = useCallback(() => {
    setSidebarShown((show) => !show);
  }, []);
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
