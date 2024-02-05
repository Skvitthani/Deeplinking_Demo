import {Text, View} from 'react-native';
import React from 'react';

const Screen2 = ({route}) => {
  const messages = route?.params?.message;
  return (
    <View>
      <Text>{messages ? messages : 'undefine'}</Text>
    </View>
  );
};

export default Screen2;
