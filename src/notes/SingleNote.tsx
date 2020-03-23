import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


const SingleNote = (props) => {
  return (
    <View>
      <Text style={styles.titleText}>{props.number}</Text>
    </View>
  );
};

const styles = StyleSheet.create<Style>({
  titleText: {
     fontSize: 20,
     fontWeight: 'bold',
     backgroundColor: '#5b5a69',
     color: 'white',
     borderTopWidth: 4,
     borderColor: 'pink',
     padding: 20,
  },
});

export default SingleNote;
