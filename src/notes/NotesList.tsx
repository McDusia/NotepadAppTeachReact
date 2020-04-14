import React from 'react';
import {FlatList, StyleSheet, ViewStyle} from 'react-native';
import SingleNote from './SingleNote';
import {Colors} from '../styles/Colors';
import {useSelector} from 'react-redux';
import {NotesState} from '../redux/notesReducer';

const NotesList = () => {
  const notes = useSelector((state: NotesState) => state.notes);

  const renderItem = (item: any) => {
    return <SingleNote title={item.item.title} content={item.item.content} />;
  };

  return (
    <FlatList
      style={styles.container}
      data={notes}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

interface Style {
  container: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 0,
    backgroundColor: Colors.GREY,
    width: '100%',
    height: '88%',
  },
});

export default NotesList;
