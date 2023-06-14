import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import AlbumScreen from '../screens/AlbumScreen';
import ChatScreen from '../screens/ChatScreen';
import ContactsScreen from '../screens/ContactsScreen';
import { colors } from '../themes/appTheme';

const Tab = createMaterialTopTabNavigator();
interface Props {
  focused: boolean;
  color: string;
}

const TopTabNavigator = () => {
  const setTabIcons = ( props : Props, routeName : string ) => {
    const { color } = props;
    console.log(color);

    let iconName: string = '';
    switch (routeName) {
    case 'Album' :
        iconName = 'basketball-outline';
        break;

    case 'Chat' :
        iconName = 'baseball-outline';
        break;

    case 'Contacts' :
        iconName = 'bicycle-outline';
        break;
    }
    return <Icon name={ iconName } size={20} color={color} />;
};

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: colors.white,
      }}
      screenOptions={({ route }) => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        },
        tabBarIcon: (props) => setTabIcons(props, route.name),
      })}
    >
      <Tab.Screen name="Album" component={ AlbumScreen } />
      <Tab.Screen name="Chat" component={ ChatScreen } />
      <Tab.Screen name="Contacts" component={ ContactsScreen } />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
