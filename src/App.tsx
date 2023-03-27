import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LayoutContainer } from './modules/Layout';
import { ThemeConfigProvider } from './modules/Theme';
import { Home, Todos } from './pages';
import GlobalStyles from './styles/globals';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeConfigProvider>
        <GlobalStyles />
        {/* //TODO DECOMPOSE (testing things) */}
        <Routes>
          <Route path="/" element={<LayoutContainer />}>
            <Route index element={<Home />} />
            <Route path="/todos" element={<Todos />} />
          </Route>
        </Routes>
      </ThemeConfigProvider>
    </BrowserRouter>
  );
};

export default App;
