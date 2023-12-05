import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';

// Navigations
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

import analytics from '@react-native-firebase/analytics';
import dynamicLinks from '@react-native-firebase/dynamic-links';

// Screens
import GoogleMap from '../screens/GoogleMap';
import HomeScreen from '../screens/HomeScreen';
import SwiperList from '../screens/SwiperList';
import ProductDetails from '../screens/ProductDetails';
import MainHomeScreen from '../screens/MainHomeScreen';
import CrashlyticsScreen from '../screens/CrashlyticsScreen';
import FireStorageScreen from '../screens/FireStorageScreen';
import BatterImageScreen from '../screens/BatterImageScreen';
import RealTimeDatabaseScreen from '../screens/RealTimeDatabaseScreen';

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

  return (
    <NavigationContainer
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
