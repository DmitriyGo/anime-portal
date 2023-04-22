import { SnackbarProvider } from 'notistack';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { LayoutContainer } from './modules/Layout';
import { defaultTheme } from './modules/Theme';
import { Home, Login, Todos } from './pages';
import GlobalStyles from './styles/globals';

const App = () => {
  return (
    <HashRouter>
      <SnackbarProvider>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<LayoutContainer />}>
              <Route index element={<Home />} />
              <Route path="/todos" element={<Todos />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </SnackbarProvider>
    </HashRouter>
  );
};

export default App;
