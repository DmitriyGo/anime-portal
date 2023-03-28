import { Outlet } from 'react-router-dom';

import { Header } from '../components';

interface LayoutProps {
  onShowSideBarChange: (event: boolean) => void;
}

const Layout = ({ onShowSideBarChange }: LayoutProps) => {
  return (
    <>
      <Header onShowSideBarChange={onShowSideBarChange} />
      <Outlet />
      {/* <footer>Hello</footer> */}
    </>
  );
};

export default Layout;
