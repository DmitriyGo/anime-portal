import { Outlet } from 'react-router-dom';

import { Header } from '../components/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <footer>Hello</footer> */}
    </>
  );
};

export default Layout;
