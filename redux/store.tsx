import {configureStore} from '@reduxjs/toolkit';
import itemsReducer from './ItemSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, itemsReducer);

const store = configureStore({
  reducer: {
    items: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: __DEV__,
});
const persistor = persistStore(store);

export {store, persistor};
