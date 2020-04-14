import React from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {Colors} from '../styles/Colors';

interface SingleNoteProps {
  title: string;
  content: string;
}

const SingleNote = (props: SingleNoteProps) => {
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
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: Colors.LIGHT_WHITE,
  },
  titleText: {
    fontSize: 20,
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
    marginBottom: 10,
  },
});

export default SingleNote;
