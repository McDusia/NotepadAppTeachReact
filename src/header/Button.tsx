import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

export interface IButtonProps {
  text: string;
  action: any;
  style?: StyleProp<ViewStyle>;
}

export const Button = (props: IButtonProps) => (
  <TouchableOpacity onPress={props.action}>
    <View style={[styles.actionButton, props.style]}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </View>
  </TouchableOpacity>
);

interface IStyle {
  actionButton: ViewStyle;
  buttonText: TextStyle;
}

const styles = StyleSheet.create<IStyle>({
  actionButton: {
    borderRadius: 64,
    height: 64,
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
