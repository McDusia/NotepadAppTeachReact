import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {Colors} from '../styles/Colors';
import {SingleNoteType} from '../redux/notesReducer';

const SingleNote = (props: SingleNoteType) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{props.title}</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>{props.content}</Text>
      </View>
    </View>
  );
};

interface Style {
  container: ViewStyle;
  titleText: TextStyle;
  contentText: TextStyle;
  contentContainer: ViewStyle;
}

const styles = StyleSheet.create<Style>({
  container: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5,
    backgroundColor: Colors.LIGHT_WHITE,
  },
  titleText: {
    fontSize: 20,
    borderTopWidth: 4,
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10,
  },
  contentText: {
    fontSize: 12,
    padding: 5,
  },
  contentContainer: {
    backgroundColor: Colors.WHITE,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
  },
});

export default SingleNote;
