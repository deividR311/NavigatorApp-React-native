import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationParams, NavigationRoute } from './interfaces';
import Page1Screen from '../screens/Page1Screen';
import Page2Screen from '../screens/Page2Screen';
import Page3Screen from '../screens/Page3Screen';
import PeopleScreen from '../screens/PeopleScreen';

const Stack = createStackNavigator<NavigationParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={ screenOptionsStyle } initialRouteName={ NavigationRoute.Page1Screen }>
      <Stack.Screen name={ NavigationRoute.Page1Screen } options={{ title: 'Page1Screen' }} component={ Page1Screen } />
      <Stack.Screen name={ NavigationRoute.Page2Screen } options={{ title: 'Page2Screen' }} component={ Page2Screen } />
      <Stack.Screen name={ NavigationRoute.Page3Screen } options={{ title: 'Page3Screen' }} component={ Page3Screen } />
      <Stack.Screen name={ NavigationRoute.PeopleScreen } component={ PeopleScreen } />
    </Stack.Navigator>
  );
};

const screenOptionsStyle = {
    headerStyle : {
        elevation: 0,
        shadowColor: 'transparent',
    },
    cardStyle : {
        backgroundColor: 'white',
    },
};
