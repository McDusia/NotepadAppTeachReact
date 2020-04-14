import React from 'react';
import SimpleModal from '../simpleElements/SimpleModal';

interface ModalProps {
  onModalClose: () => void;
}

const ADD_NEW_NOTE_TEXT = 'Add note';
const TITLE = 'Adding new note...';

const NewNoteModal = (props: ModalProps) => {
  return (
    <SimpleModal
      onModalClose={props.onModalClose}
      title={TITLE}
      proceedText={ADD_NEW_NOTE_TEXT}
    />
  );
};

export default NewNoteModal;
