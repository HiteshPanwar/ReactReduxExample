
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import AsyncStorage from "@react-native-community/async-storage"
import { persistStore, persistReducer } from 'redux-persist';


const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist:['itemReducer']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const  store=createStore(persistedReducer);


const persistedStore = persistStore(store)
export {
    store,
    persistedStore,
  };