import React from 'react';
import {View} from 'react-native';
import Header from './header/Header';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor, store} from './redux/store';
import NotesList from './notes/NotesList';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View>
          <Header />
          <NotesList />
        </View>
      </PersistGate>
    </Provider>
  );
};

export default App;
