import { SnackbarProvider } from 'notistack';
import { Details, Home, Page404, Profile, SignIn, SignUp, Watch } from 'pages';
import { useEffect } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/globals';

import { ROUTES } from '@/constants/routes';
import { checkAuth, selectAccessToken } from '@/modules/Auth';
import { LayoutContainer } from '@/modules/Layout';
import { useDispatch, useSelector } from '@/store';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAccessToken);

  useEffect(() => {
    const checkAutorization = async () => {
      if (token) {
        await dispatch(checkAuth());
      }
    };

    checkAutorization();
  }, []);

  return (
    <HashRouter>
      <SnackbarProvider>
        <GlobalStyles />
        <Routes>
          <Route path={ROUTES.HOME} element={<LayoutContainer />}>
            <Route index element={<Home />} />
            <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
            <Route path={`${ROUTES.DETAILS}/:id`} element={<Details />} />
            <Route path={`${ROUTES.WATCH}/:id`} element={<Watch />} />
            <Route path={`${ROUTES.PROFILE}/*`} element={<Profile />} />
            <Route path="/*" element={<Page404 />} />
          </Route>
        </Routes>
      </SnackbarProvider>
    </HashRouter>
  );
};

export default App;
