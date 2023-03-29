import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeConfigProvider } from './modules/Theme';
import { Home, Todos } from './pages';
import GlobalStyles from './styles/globals';

const App = () => {
  const { i18n } = useTranslation();

  const handleClick = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <BrowserRouter>
      <ThemeConfigProvider>
        <GlobalStyles />
        {/* //TODO DECOMPOSE (testing things) */}
        <div>
          <button onClick={() => handleClick('uk')}>uk</button>
          <button onClick={() => handleClick('ru')}>ru</button>
          <button onClick={() => handleClick('en')}>en</button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </ThemeConfigProvider>
    </BrowserRouter>
  );
};

export default App;
