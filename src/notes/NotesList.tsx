import React from 'react';
import {FlatList, StyleSheet, View, ViewStyle} from 'react-native';
import SingleNote from './SingleNote';
import {Colors} from '../styles/Colors';
import {useSelector} from 'react-redux';
import {NotesState} from '../redux/notesReducer';

const NotesList = () => {
  const notes = useSelector((state: NotesState) => state.notes);

  const renderItem = (item: any, index: number) => {
    return <SingleNote title={item.item.title} content={item.item.content} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
            data={notes}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
      />
    </View>
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
    height: '100%',
  },
});

export default NotesList;
