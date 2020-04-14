import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {Colors} from '../styles/Colors';

export interface ButtonProps {
  action: () => void;
  text: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const Button = (props: ButtonProps) => (
  <TouchableOpacity
    style={[styles.container, props.containerStyle]}
    onPress={props.action}>
    <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
  </TouchableOpacity>
);

interface Style {
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.GREY,
    borderRadius: 5,
  },
  text: {
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
});
