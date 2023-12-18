import React from 'react';
import {StyleSheet, View} from 'react-native';
import ButtonConst from '../components/ButtonConst';
import PushNotification from 'react-native-push-notification';
import {SafeAreaView} from 'react-native';

const SendNotification = () => {
  const onPress = () => {
    try {
      PushNotification.localNotification({
        channelId: 'testing',
        message: 'My Notification Message',
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  const onScheduleNotificationPress = () => {
    PushNotification.localNotificationSchedule({
      channelId: 'testing',
      channelName: 'Testing Notification',
      message: 'My Schedule Notification Message',
      date: new Date(Date.now() + 5 * 1000),
      repeatType: 'time',
      repeatTime: 5000,
      allowWhileIdle: true,
      id: '123',
    });
  };

  const onStopePress = () => {
    PushNotification.cancelLocalNotification({id: '123'});
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={{height: 20}} />
      <ButtonConst title={'Press'} onPress={onPress} />
      <View style={{height: 20}} />
      <ButtonConst
        title={'Schedule Notification'}
        onPress={onScheduleNotificationPress}
      />
      <View style={{height: 20}} />
      <ButtonConst
        title={'Stope Schedule Notification'}
        onPress={onStopePress}
      />
    </View>
  );
};

export default SendNotification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    backgroundColor: 'white',
  },
});
