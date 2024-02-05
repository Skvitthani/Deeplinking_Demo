import React, {useEffect} from 'react';
import {Linking, StyleSheet} from 'react-native';

// Navigations
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import analytics from '@react-native-firebase/analytics';
import dynamicLinks from '@react-native-firebase/dynamic-links';

// Screens
import GoogleMap from '../screens/GoogleMap';
import HomeScreen from '../screens/HomeScreen';
import SwiperList from '../screens/SwiperList';
import SplashScreen from '../screens/SplashScreen';
import ProductDetails from '../screens/ProductDetails';
import PractiseScreen from '../screens/PractiseScreen';
import MainHomeScreen from '../screens/MainHomeScreen';
import CrashlyticsScreen from '../screens/CrashlyticsScreen';
import FireStorageScreen from '../screens/FireStorageScreen';
import BatterImageScreen from '../screens/BatterImageScreen';
import RealTimeDatabaseScreen from '../screens/RealTimeDatabaseScreen';
import TinderAnimationScreen from '../screens/TinderAnimationScreen';
import SendNotification from '../screens/SendNotification';
import Screen1 from '../screens/Screen1';
import Screen2 from '../screens/Screen2';

const Stack = createNativeStackNavigator();

const StckNavigate = () => {
  const routeNameRef = React.useRef();
  const navigationRef = React.useRef();

  const HandelDeepLinking = () => {
    const navigation = useNavigation();
    const handelLink = async link => {
      let productId = link?.url?.split('?').pop();
      navigation.navigate('Product', {productId: productId});
    };
    useEffect(() => {
      const unsubscribe = dynamicLinks().onLink(handelLink);
      return () => unsubscribe();
    }, []);

    return null;
  };

  useEffect(() => {
    const fetchInitialURL = async () => {
      try {
        Linking.addEventListener('url', ({url}) => {
          console.log('url----------', url);
        });

        const url = await Linking.getInitialURL();
        if (url) {
          console.log('url----------', url);
        }
      } catch (error) {
        console.error('Error fetching initial URL:', error);
      }
    };

    fetchInitialURL();
  }, []);

  const config = {
    screens: {
      Screen1: {
        path: 'Screen1/:message',
        parse: {
          message: message => `${message}`,
        },
      },
      Screen2: {
        path: 'Screen2/:message',
        parse: {
          message: message => `${message}`,
        },
      },
    },
  };

  const linking = {
    prefixes: ['http://deeplink'],
    config,
  };

  return (
    <NavigationContainer
      linking={linking}
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
        }
        routeNameRef.current = currentRouteName;
      }}>
      <HandelDeepLinking />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{headerShown: true}}
        />
        <Stack.Screen name="SendNotification" component={SendNotification} />
        <Stack.Screen
          name="TinderAnimationScreen"
          component={TinderAnimationScreen}
        />
        <Stack.Screen name="PractiseScreen" component={PractiseScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MainHomeScreen" component={MainHomeScreen} />
        <Stack.Screen name="BatterImageScreen" component={BatterImageScreen} />
        <Stack.Screen
          name="RealTimeDatabaseScreen"
          component={RealTimeDatabaseScreen}
        />
        <Stack.Screen name="FireStorageScreen" component={FireStorageScreen} />
        <Stack.Screen name="CrashlyticsScreen" component={CrashlyticsScreen} />
        <Stack.Screen name="GoogleMap" component={GoogleMap} />
        <Stack.Screen name="SwiperList" component={SwiperList} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StckNavigate;

const styles = StyleSheet.create({});
