import {ADD_NOTE_TYPE} from './notesActions';
import {AnyAction} from 'redux';

export type SingleNote = {
  title: string;
  content: string;
};

export interface NotesState {
  notes: Array<SingleNote>;
}

export const initialNotesState: NotesState = {
  notes: [],
};

function notesReducer(
  state: NotesState = initialNotesState,
  action: AnyAction,
): NotesState {
  switch (action.type) {
    case ADD_NOTE_TYPE:
      return {
        notes: [
          ...state.notes,
          {
            title: action.title,
            content: action.content,
          },
        ],
      };
    default:
      return state;
  }
}

export default notesReducer;
