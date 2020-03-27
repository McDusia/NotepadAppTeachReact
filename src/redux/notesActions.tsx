export const ADD_NOTE_TYPE = '[notes] ADD_NOTE';

export function addNote(title: string, content: string) {
  return {type: ADD_NOTE_TYPE, title, content};
}
