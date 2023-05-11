import { SnackbarProvider } from 'notistack';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { logIn } from './modules/Auth';
import { LayoutContainer } from './modules/Layout';
import { Details, Home, Login, Page404, Register, User, Watch } from './pages';
import appCookiesStorage from './shared/utils/appCookies';
import { useDispatch } from './store';
import GlobalStyles from './styles/globals';

import { AUTHORIZATION_TOKEN_STORAGE_KEY } from '@/constants/common';

const App = () => {
  const dispatch = useDispatch();

  const token = appCookiesStorage.getItem(AUTHORIZATION_TOKEN_STORAGE_KEY);

  if (token) {
    dispatch(logIn(token));
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
