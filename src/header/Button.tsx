import React from 'react';
import {
  StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity,
  View, ViewStyle,
} from 'react-native';

export interface IButtonProps {
  action: any;
  style?: StyleProp<ViewStyle>;
}

export const Button = (props: IButtonProps) => (
  <TouchableOpacity onPress={props.action}>
    <View style={[styles.actionButton, props.style]}>
      <Text style={styles.buttonText}>+</Text>
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
    backgroundColor: '#5b5a69',
    color: 'white',
  },
  buttonText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 5,
  },
});
