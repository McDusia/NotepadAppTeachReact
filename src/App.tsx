import React from 'react';
import {View} from 'react-native';
import Header from './header/Header';
import NoteList from './notes/NoteList';

const App = () => {
  return (
    <View>
      <Header />
      <NoteList />
    </View>
  );
};

export default App;
