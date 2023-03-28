import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LayoutContainer } from './modules/Layout';
import { ThemeConfigProvider } from './modules/Theme';
import { Home, Todos } from './pages';
import GlobalStyles from './styles/globals';
import { StyledApp } from './styles/styles';

const App = () => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);
  const onShowSideBarChange = (event: boolean) => {
    setShowSideBar(event);
  };

  return (
    <StyledApp active={showSideBar}>
      <BrowserRouter>
        <ThemeConfigProvider>
          <GlobalStyles />
          <Routes>
            <Route
              path="/"
              element={
                <LayoutContainer onShowSideBarChange={onShowSideBarChange} />
              }
            >
              <Route index element={<Home />} />
              <Route path="/todos" element={<Todos />} />
            </Route>
          </Routes>
        </ThemeConfigProvider>
      </BrowserRouter>
    </StyledApp>
  );
};

export default App;
