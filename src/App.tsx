import { SnackbarProvider } from 'notistack';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { logIn } from './modules/Auth';
import { LayoutContainer } from './modules/Layout';
import { Home, Login, Register, Todos } from './pages';
import appCookiesStorage from './shared/utils/appCookies';
import { useDispatch } from './store';
import GlobalStyles from './styles/globals';

import { AUTHORIZATION_TOKEN_STORAGE_KEY } from '@/constants/common';

const App = () => {
  const dispatch = useDispatch();

  var token = appCookiesStorage.getItem(AUTHORIZATION_TOKEN_STORAGE_KEY);

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
            <Route path="/todos" element={<Todos />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </SnackbarProvider>
    </HashRouter>
  );
};

export default App;
