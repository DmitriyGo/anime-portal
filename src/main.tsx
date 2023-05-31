import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { persistor, store } from './store';

import { FullPageLoader } from '@/components';
import { i18n } from '@/modules/Translation';
import { setupHttpClient } from '@/utils';

setupHttpClient(store);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <I18nextProvider i18n={i18n}>
        <Suspense fallback={<FullPageLoader />}>
          <App />
        </Suspense>
      </I18nextProvider>
    </PersistGate>
  </Provider>,
);
