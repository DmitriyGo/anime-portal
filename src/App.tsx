import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ThemeConfigProvider } from './modules/Theme';
import { Home, Todos } from './pages';
import { store } from './store';
import GlobalStyles from './styles/globals';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeConfigProvider>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todos" element={<Todos />} />
          </Routes>
        </ThemeConfigProvider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
