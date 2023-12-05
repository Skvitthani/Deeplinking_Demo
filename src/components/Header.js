import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Animated, {FadeIn} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Image, Platform, Pressable, StyleSheet} from 'react-native';

const Header = () => {
  const inset = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <Animated.View
      style={[styles.container, {top: Platform.OS === 'ios' ? inset.top : 20}]}
      entering={FadeIn.delay(400)}>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={require('../assets/images/chevron.png')}
          style={styles.chevron}
        />
      </Pressable>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    left: 20,
    zIndex: 1,
    position: 'absolute',
  },
  chevron: {
    width: 44,
    height: 44,
  },
});
