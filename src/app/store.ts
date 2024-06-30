import storage from 'redux-persist/lib/storage';
import expireReducer from 'redux-persist-expire';
import persistReducer from 'redux-persist/es/persistReducer';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import authReducer, { authInitialState } from '@store-services/auth/authSlice';
import productsReducer from '@store-services/products/productsSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
});

// const cryptoKey = import.meta.env.VITE_CRYPTO_KEY;

const persistConfig = {
  key: 'root',
  storage,
  transforms: [
    // encryptTransform({
    //   secretKey: cryptoKey,
    // }),
    expireReducer('auth', {
      expiredState: authInitialState,
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;