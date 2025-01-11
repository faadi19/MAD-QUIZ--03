import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../dashboard/LoginScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Dashboard" component={TabNavigator} />
    </Stack.Navigator>
  );
}
