import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  Modal,
} from 'react-native';
import {Colors} from '../styles/Colors';
import {Button} from './Button';

interface ModalProps {
  onModalClose: () => void;
  closeText?: string;
  title: string;
  proceedText?: string;
}

const CLOSE_TEXT = 'Close';

const SimpleModal: FC<ModalProps> = props => {
  const renderAdditionalButton = () => {
    return props.proceedText ? (
      <Button
        containerStyle={styles.button}
        action={() => {}}
        text={props.proceedText}
      />
    ) : null;
  };

  return (
    <Modal animationType="slide" transparent={true}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        {props.children}
        <View style={styles.buttonsContainer}>
          <Button
            containerStyle={styles.button}
            action={props.onModalClose}
            text={props.closeText ? props.closeText : CLOSE_TEXT}
          />
          {renderAdditionalButton()}
        </View>
      </View>
    </Modal>
  );
};

interface Style {
  container: ViewStyle;
  title: TextStyle;
  buttonsContainer: ViewStyle;
  button: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    marginTop: 40,
    margin: 20,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
  },
  buttonsContainer: {
    flex: 0,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    margin: 5,
  },
});

export default SimpleModal;
