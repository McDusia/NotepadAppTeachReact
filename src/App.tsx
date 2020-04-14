import React from 'react';
import {View} from 'react-native';
import Header from './header/Header';
import NotesList from './notes/NotesList';

const App = () => {
  return (
    <View>
      <Header />
      <NotesList />
    </View>
  );
};

export default App;
