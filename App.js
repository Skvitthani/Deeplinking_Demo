import React, {useEffect} from 'react';
import Toast from 'react-native-toast-message';

import StckNavigate from './src/navigations/StckNavigate';
import {LogBox} from 'react-native';
import PushNotification, {Importance} from 'react-native-push-notification';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  const createChannels = () => {
    PushNotification.createChannel(
      {
        channelId: 'testing',
        channelName: 'Testing Notification',
        // channelDescription: 'A channel to categorise your notifications',
        // playSound: false,
        // soundName: 'default',
        // importance: Importance.HIGH,
        // vibrate: true,
      },
      created => console.log(`createChannel returned '${created}'`),
    );
  };

  useEffect(() => {
    createChannels();
  }, []);

  return (
    <>
      <StckNavigate />
      <Toast position="top" />
    </>
  );
};

export default App;
