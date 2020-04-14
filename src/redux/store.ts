import {createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import notesReducer from './notesReducer';
import AsyncStorage from '@react-native-community/async-storage';

const persistConfig = {
  storage: AsyncStorage,
  key: 'notes',
};
const persistedReducer = persistReducer(persistConfig, notesReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
