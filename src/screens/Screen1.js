import {Text, View} from 'react-native';
import React from 'react';

const Screen1 = ({route}) => {
  const messages = route?.params?.message;
  return (
    <View>
      <Text>{messages ? messages : 'undefine'}</Text>
    </View>
  );
};

export default Screen1;
