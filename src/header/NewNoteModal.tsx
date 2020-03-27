import React, {useState} from 'react';
import SimpleModal from '../simpleElements/SimpleModal';
import {useDispatch} from 'react-redux';
import {addNote} from '../redux/notesActions';
import {StyleSheet, TextInput, TextStyle, View, ViewStyle} from 'react-native';
import {Colors} from '../styles/Colors';

interface ModalProps {
  onModalClose: () => void;
}

const ADD_NEW_NOTE_TEXT = 'Add note';
const TITLE = 'Adding new note...';

const TITLE_PLACEHOLDER = 'Title';
const CONTENT_PLACEHOLDER = 'Content';

const NewNoteModal = (props: ModalProps) => {
  const [newNoteTitle, setNewNoteTitle] = useState('');
  const [newNoteContent, setNewNoteContent] = useState('');
  const dispatch = useDispatch();

  return (
    <SimpleModal
      onModalClose={props.onModalClose}
      title={TITLE}
      proceedButton={{
        text: ADD_NEW_NOTE_TEXT,
        onClickAction: () => {
          dispatch(addNote(newNoteTitle, newNoteContent));
          props.onModalClose();
        },
      }}>
      <View style={styles.inputContainer}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={text => setNewNoteTitle(text)}
            value={newNoteTitle}
            multiline={false}
            placeholder={TITLE_PLACEHOLDER}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            style={[styles.input, styles.multilineInput]}
            onChangeText={text => setNewNoteContent(text)}
            value={newNoteContent}
            multiline={true}
            placeholder={CONTENT_PLACEHOLDER}
          />
        </View>
      </View>
    </SimpleModal>
  );
};

interface Style {
  input: TextStyle;
  multilineInput: TextStyle;
  container: ViewStyle;
  inputContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  input: {
    height: 40,
    width: '100%',
    borderColor: Colors.GREY,
    borderWidth: 1,
  },
  multilineInput: {
    height: 200,
  },
  container: {
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'flex-end',
  },
});

export default NewNoteModal;
