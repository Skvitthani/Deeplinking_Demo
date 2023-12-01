import React from 'react';
import Toast from 'react-native-toast-message';

import StckNavigate from './src/navigations/StckNavigate';

const App = () => {
  return (
    <>
      <StckNavigate />
      <Toast position="top" />
    </>
  );
};

export default App;
