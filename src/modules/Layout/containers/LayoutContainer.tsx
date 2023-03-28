import { Outlet } from 'react-router-dom';

import { Header } from '../components';

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
