import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProductDetails from '../screens/ProductDetails';

const Stack = createNativeStackNavigator();

const StckNavigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StckNavigate;

const styles = StyleSheet.create({});
