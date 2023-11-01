import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ProductDetails from '../screens/ProductDetails';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const StckNavigate = () => {
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
    <NavigationContainer>
      <HandelDeepLinking />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StckNavigate;

const styles = StyleSheet.create({});
