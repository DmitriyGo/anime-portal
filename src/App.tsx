import { SnackbarProvider } from 'notistack';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { Details, Home, Login, Page404, Register, User, Watch } from './pages';
import GlobalStyles from './styles/globals';

import { checkAuth, selectAccessToken } from '@/modules/Auth';
import { LayoutContainer } from '@/modules/Layout';
import { useDispatch, useSelector } from '@/store';

const App = () => {
  const dispatch = useDispatch();

  const token = useSelector(selectAccessToken);

  if (token) {
    dispatch(checkAuth());
  }

  return (
    <HashRouter>
      <SnackbarProvider>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<LayoutContainer />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/watch/:id" element={<Watch />} />
            <Route path="/user/*" element={<User />} />
            <Route path="/*" element={<Page404 />} />
          </Route>
        </Routes>
      </SnackbarProvider>
    </HashRouter>
  );
};

export default App;
