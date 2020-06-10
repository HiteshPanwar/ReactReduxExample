import React from 'react';
import { Provider } from 'react-redux';
import ItemList from './src/screens/ItemList/ItemList';
import {PersistGate} from 'redux-persist/es/integration/react'
import {store , persistedStore } from './src/redux/store'


export default App = () => {
  return (
    <Provider store={store}>   
    <PersistGate persistor={persistedStore} loading={null}> 
        <ItemList />   
        </PersistGate>
    </Provider>
  );
};

