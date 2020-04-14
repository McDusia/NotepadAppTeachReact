import React, {useState} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {Colors} from '../styles/Colors';
import NewNoteModal from './NewNoteModal';
import {CircleButton} from './CircleButton';

const HEADER_TITLE = 'Notepad';

const Header = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const renderModal = () => {
    return modalVisible ? (
      <NewNoteModal onModalClose={() => setModalVisible(false)} />
    ) : null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{HEADER_TITLE}</Text>
      <View style={styles.buttonContainer}>
        <CircleButton
          action={() => setModalVisible(true)}
          style={styles.button}
        />
      </View>
      {renderModal()}
    </View>
  );
};

interface Style {
  container: ViewStyle;
  button: ViewStyle;
  buttonContainer: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.PURPLE,
    color: Colors.LIGHT_WHITE,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  button: {
    backgroundColor: Colors.GREY,
    color: Colors.LIGHT_WHITE,
  },
  buttonContainer: {
    flex: 0,
    padding: 10,
    color: Colors.LIGHT_WHITE,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    color: Colors.LIGHT_WHITE,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Header;
