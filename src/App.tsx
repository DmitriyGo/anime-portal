import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeConfigProvider } from './modules/Theme';
import { Home, Todos } from './pages';
import GlobalStyles from './styles/globals';

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage('uk');
  }, [i18n]);

  return (
    <BrowserRouter>
      <ThemeConfigProvider>
        <GlobalStyles />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </ThemeConfigProvider>
    </BrowserRouter>
  );
};

export default App;
