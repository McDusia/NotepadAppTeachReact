import React from 'react';
import {View} from 'react-native';
import Header from './header/Header';
import NotesList from './notes/NotesList';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Header />
        <NotesList />
      </View>
    </Provider>
  );
};

export default App;
