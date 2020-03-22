import React from 'react';
import {Text, View} from 'react-native';

const SingleNote = (props) => {
  return (
    <View>
      <Text>Single Note {props.number}</Text>
    </View>
  );
};

export default SingleNote;
