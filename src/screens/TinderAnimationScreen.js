import React from 'react';
import Animated, {
  interpolate,
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {Tinderdata} from '../helper/TinderDummyData';
import LinearGradient from 'react-native-linear-gradient';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const length = Tinderdata?.length;

const TinderAnimationScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dataRenderView}>
        {Tinderdata?.map((item, index) => {
          return (
            <Animated.View
              key={item?.id}
              style={[
                styles.cardView,

                {
                  zIndex: length - index,
                  opacity: 1 - index * 0.2,
                  transform: [
                    {translateY: -index * 30},
                    {scale: 1 - index * 0.05},
                  ],
                },
              ]}>
              <Image
                source={{uri: item?.url}}
                style={[StyleSheet.absoluteFillObject]}
              />
              <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.8)']}
                style={[StyleSheet.absoluteFillObject, {top: '50%'}]}
              />

              <View style={styles.footer}>
                <Text style={styles.textStyle}>{item?.name}</Text>
              </View>
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
};

export default TinderAnimationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardView: {
    borderRadius: 15,
    overflow: 'hidden',
    width: width * 0.8,
    position: 'absolute',
    aspectRatio: 1 / 1.67,
    justifyContent: 'flex-end',
  },
  dataRenderView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {padding: 10},
});
