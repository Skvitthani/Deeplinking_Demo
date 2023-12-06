import React from 'react';
import Toast from 'react-native-toast-message';

import StckNavigate from './src/navigations/StckNavigate';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const App = () => {
  return (
    <>
      <StckNavigate />
      <Toast position="top" />
    </>
  );
};

export default App;
