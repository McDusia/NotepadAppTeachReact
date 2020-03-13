import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {Button} from './Button';
import {Colors} from '../styles/Colors';

// TODO add action onButtonClick
const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Notepad</Text>
      <View style={styles.buttonContainer}>
        <Button action={() => {}} text={'+'} style={styles.button} />
      </View>
    </View>
  );
};

interface IStyle {
  container: ViewStyle;
  button: ViewStyle;
  buttonContainer: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  button: {
    backgroundColor: Colors.BLUE,
  },
  buttonContainer: {
    flex: 0,
    padding: 10,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 24,
  },
});

export default Header;
