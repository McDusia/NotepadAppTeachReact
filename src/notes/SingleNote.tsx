import React from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import {Colors} from '../styles/Colors';

const SingleNote = (props: string) => {
  return (
    <View>
      <Text style={styles.titleText}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create<Style>({
  titleText: {
     fontSize: 20,
     fontWeight: 'bold',
     backgroundColor: Colors.GREY,
     color: 'white',
     borderTopWidth: 4,
     borderColor: Colors.PINK,
     padding: 20,
  },
});

export default SingleNote;
