import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle,
TouchableHighlight, Modal } from 'react-native';
import {Button} from './Button';
import {Colors} from '../styles/Colors';

var modalVisible = false;

function setModalVisible(visible) {
    modalVisible = false;
  };

const Header = () => {
    return (
    <View style={styles.container}>
      <Text style={styles.text}>Your notepad</Text>
      <View style={styles.buttonContainer}>
        <Button
          action={onPressAction}
          style={styles.button}>
         </Button>
      </View>

      <Modal animationType="slide"
                transparent={true}
                visible={modalVisible}
                >
                <View style={{marginTop: 22}}>
                  <View>
                    <Text>Hello World!</Text>

                    <TouchableHighlight
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}>
                      <Text>Hide Modal</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              </Modal>

    </View>
  );
};

onPressAction = () => {
    modalVisible = false;
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
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.PURPLE,
    color: Colors.LIGHT_WHITE,
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
    fontSize: 24,
    color: Colors.LIGHT_WHITE,
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Header;
