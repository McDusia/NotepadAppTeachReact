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
import {Colors} from '../styles/Colors';

export interface IButtonProps {
  action: any;
  style?: StyleProp<ViewStyle>;
}

export const CircleButton = (props: IButtonProps) => (
  <TouchableOpacity onPress={props.action}>
    <View style={[styles.actionButton, props.style]}>
      <Text style={styles.buttonText}>+</Text>
    </View>
  </TouchableOpacity>
);

interface Style {
  actionButton: ViewStyle;
  buttonText: TextStyle;
}

const styles = StyleSheet.create<Style>({
  actionButton: {
    borderRadius: 64,
    height: 64,
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.GREY,
    color: 'white',
  },
  buttonText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: Colors.WHITE,
    paddingBottom: 5,
  },
});
