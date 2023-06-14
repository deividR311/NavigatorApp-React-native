import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Tab1Screen from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../themes/appTheme';
import TopTabNavigator from './TopTabNavigator';

interface Props {
    focused: boolean;
    color: string;
    size?: number;
}

const setTabIcons = ( props : Props, routeName : string ) => {
    const { color } = props;

    let iconName: string = '';
    switch (routeName) {
    case 'Tab1Screen' :
        iconName = 'basketball-outline';
        break;

    case 'Tab2Screen' :
        iconName = 'baseball-outline';
        break;

    case 'StackNavigator' :
        iconName = 'bicycle-outline';
        break;
    }
    return <Icon name={ iconName } size={30} color={color} />;
};

const BottomTabIOS = createBottomTabNavigator();
const _TabsIOS = () => (
    <BottomTabIOS.Navigator
      sceneContainerStyle={ styles.sceneContainerStyle }
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: (props) => setTabIcons(props, route.name),
      })}
    >
      <BottomTabIOS.Screen name="Tab1Screen"     options={{ title: 'Tab1' }} component={ Tab1Screen } />
      <BottomTabIOS.Screen name="Tab2Screen"     options={{ title: 'Tab2' }} component={ TopTabNavigator } />
      <BottomTabIOS.Screen name="StackNavigator" options={{ title: 'Tab3' }} component={ StackNavigator } />
    </BottomTabIOS.Navigator>
);

const BottomTabANDROID = createMaterialBottomTabNavigator();
const _TabsANDROID = () => (
    <BottomTabANDROID.Navigator
      barStyle={{
        backgroundColor: colors.primary,
      }}
      shifting={true}
      activeColor={colors.white}
      inactiveColor={colors.gray}
      screenOptions={({ route }) => ({
        tabBarIcon: (props) => setTabIcons(props, route.name),
      })}
    >
      <BottomTabANDROID.Screen name="Tab1Screen"     options={{ title: 'Tab1' }} component={ Tab1Screen } />
      <BottomTabANDROID.Screen name="Tab2Screen"     options={{ title: 'Tab2' }} component={ TopTabNavigator } />
      <BottomTabANDROID.Screen name="StackNavigator" options={{ title: 'Tab3' }} component={ StackNavigator } />
    </BottomTabANDROID.Navigator>
);

const Tabs = () => {
    return Platform.OS === 'ios'
    ? <_TabsIOS />
    : <_TabsANDROID />;
};

export default Tabs;

const styles = StyleSheet.create({
    tabBarStyle : {
      borderTopColor: colors.primary,
      borderTopWidth: 0,
      elevation: 0,
    },

    sceneContainerStyle : {
      backgroundColor: colors.white,
    },
});
