import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, SideBar } from '../components';

interface LayoutProps {
  onShowSideBarChange: (event: boolean) => void;
}

const Layout = ({ onShowSideBarChange }: LayoutProps) => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const clickHandler = () => {
    setShowSideBar((prev) => {
      const next = !prev;

      onShowSideBarChange(next);
      return next;
    });
  };

  return (
    <>
      <Header onShowSideBar={clickHandler} />
      {showSideBar && <SideBar onClose={clickHandler} />}

      <Outlet />
      {/* TODO footer */}
    </>
  );
};

export default Layout;
