import React from 'react';
import LottieView from 'lottie-react-native';
import {Dimensions, StatusBar, StyleSheet} from 'react-native';
import Animated, {ZoomIn, ZoomOut} from 'react-native-reanimated';

const width = Dimensions.get('screen').width;

const SplashScreen = ({navigation}) => {
  return (
    <Animated.View
      style={styles.container}
      exiting={ZoomOut.delay(600).duration(1000)}
      entering={ZoomIn.delay(1000).duration(1000)}>
      <StatusBar hidden />

      <LottieView
        autoPlay
        loop={false}
        style={styles.lottiView}
        source={require('../assets/lottie/Netflix.json')}
        onAnimationFinish={() => navigation.navigate('MainHomeScreen')}
      />
    </Animated.View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lottiView: {
    width: width,
    aspectRatio: 1,
  },
});
