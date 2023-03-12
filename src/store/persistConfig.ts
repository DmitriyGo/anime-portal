import storage from 'redux-persist/lib/storage';

export const persistConfig = {
  key: 'nextjs',
  whitelist: ['theming'],
  storage,
};
