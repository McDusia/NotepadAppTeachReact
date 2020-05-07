import React from 'react';
import {View} from 'react-native';
import Header from './header/Header';
import {Provider} from 'react-redux';
import store from './redux/store';
import NotesList from './notes/NotesList';

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
