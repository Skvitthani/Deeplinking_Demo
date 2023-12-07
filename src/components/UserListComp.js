import React, {memo} from 'react';
import moment from 'moment';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const UserListComp = ({item, onItemPress}) => {
  console.log('item ----');
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onItemPress(item)}>
        <View style={{flexDirection: 'row'}}>
          <Image source={{uri: item?.avatar}} style={styles.avatarStyle} />
          <View style={{paddingLeft: 20}}>
            <Text style={styles.userNameStyle}>{item?.username}</Text>
            <Text style={styles.userNameStyle}>
              {moment(item?.brithdate).format('LL')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default memo(UserListComp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'black',
  },
  avatarStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userNameStyle: {
    color: 'white',
  },
});
