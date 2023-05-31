import { SnackbarProvider } from 'notistack';
import { Details, Home, Page404, Profile, SignIn, SignUp, Watch } from 'pages';
import { HashRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/globals';

import { ROUTES } from '@/constants/routes';
import { selectAccessToken } from '@/modules/Auth';
import { LayoutContainer } from '@/modules/Layout';
import { useSelector } from '@/store';

const App = () => {
  const authorized = useSelector(selectAccessToken);

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
            {authorized && (
              <Route path={`${ROUTES.PROFILE}/*`} element={<Profile />} />
            )}
            <Route path="/*" element={<Page404 />} />
          </Route>
        </Routes>
      </SnackbarProvider>
    </HashRouter>
  );
};

export default App;
