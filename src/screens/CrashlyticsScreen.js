import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import RazorpayCheckout from 'react-native-razorpay';
import crashlytics from '@react-native-firebase/crashlytics';

const CrashlyticsScreen = () => {
  // const onPressPress = () => {
  //   try {
  //     var options = {
  //       description: 'Credits towards consultation',
  //       image: 'https://i.imgur.com/3g7nmJC.png',
  //       currency: 'INR',
  //       // key: '',
  //       key: 'rzp_test_WY9BAclLnQhspc',
  //       amount: '100',
  //       name: 'foo',
  //       prefill: {
  //         email: 'void@razorpay.com',
  //         contact: '9191919191',
  //         name: 'Razorpay Software',
  //       },
  //       theme: {color: '#F37254'},
  //     };
  //     RazorpayCheckout.open(options)
  //       .then(data => {
  //         Alert.alert(`Success: ${data.razorpay_payment_id}`);
  //       })
  //       .catch(error => {
  //         crashlytics().recordError(error?.description);
  //       });
  //     crashlytics().log('on Press');
  //   } catch (error) {
  //     console.log('error', error);
  //     crashlytics().recordError(error);
  //   }
  // };

  async function onSignIn(user) {
    console.log('user', user);
    crashlytics().log('User signed in.');
    await Promise.all([
      crashlytics().setUserId(user.uid),
      crashlytics().setAttribute('credits', String(user.credits)),
      crashlytics().setAttributes({
        role: 'admin',
        followers: '13',
        email: user.email,
        username: user.username,
      }),
    ]);
  }

  useEffect(() => {
    crashlytics().log('App mounted.');
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.onPressButtonStyle}
        onPress={() => {
          onSignIn({
            uid: 'Aa0Bb1Cc2Dd3Ee4Ff5Gg6Hh7Ii8Jj9',
            username: 'Joaquin Phoenix',
            email: 'phoenix@example.com',
            credits: 42,
          });
        }}>
        <Text>Press</Text>
      </TouchableOpacity>
      <Button title="Test Crash" onPress={() => crashlytics().crash()} />
    </View>
  );
};

export default CrashlyticsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  onPressButtonStyle: {
    padding: 20,
    marginTop: 20,
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'center',
  },
});
