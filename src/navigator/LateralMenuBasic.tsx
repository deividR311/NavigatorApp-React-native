import React from 'react';
import { useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';

const Drawer = createDrawerNavigator();

export const LateralMenuBasic = () => {

  const { width, height } = useWindowDimensions();

  return (
    <Drawer.Navigator screenOptions={{
      drawerType: width >= height ? 'permanent' : 'front',
      swipeEnabled: true,
    }}>
      <Drawer.Screen name="Home" component={ StackNavigator } />
      <Drawer.Screen name="Article" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
};
