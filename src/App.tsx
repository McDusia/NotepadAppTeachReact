// TODO add header with info about app and plus sign
// TODO add styling and layout

import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import SingleNote from './notes/SingleNote';
import Header from './header/Header';

const App = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <Header />
      <View>
        <SingleNote number="1" />
        <SingleNote number="2" />
        <SingleNote number="3" />
      </View>
    </ScrollView>
  );
};

interface Style {
  scrollView: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  scrollView: {
  },
});

export default App;
