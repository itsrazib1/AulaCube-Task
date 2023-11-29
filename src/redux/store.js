import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from './features/tasks/tasksSlice';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import persistStore from 'redux-persist/es/persistStore';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, tasksSlice);

const store = configureStore({
  reducer: {
    tasksSlice: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };