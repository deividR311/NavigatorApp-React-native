import React from 'react';
import { Image, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import SettingsScreen from '../screens/SettingsScreen';
import { styles } from '../themes/appTheme';
import Tabs from './Tabs';

const Drawer = createDrawerNavigator();

export const LateralMenu = () => {

  const { width, height } = useWindowDimensions();

  return (
    <Drawer.Navigator
        screenOptions={{
            drawerType: width >= height ? 'permanent' : 'front',
            swipeEnabled: true,
        }}
        // eslint-disable-next-line react/no-unstable-nested-components
        drawerContent={ (props) => <MenuInterno { ...props } /> }
    >
      <Drawer.Screen name="Tabs" component={ Tabs } />
      <Drawer.Screen name="Settings" component={ SettingsScreen } />
    </Drawer.Navigator>
  );
};

const MenuInterno = ( { navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
        <View style={ styles.avatarContainer }>
            <Image
            source={{ uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif' }}
            style={ styles.avatar }
            />
        </View>

        <View style={ styles.menuContainer }>
            <TouchableOpacity
                style={{
                    flexDirection: 'row',
                    ...styles.menuBoton,
                }}
                onPress={ () => navigation.navigate('Tabs') }
            >
                <Icon name="basketball-outline" size={20} color="indigo" />
                <Text style={ styles.menuTexto }> Tabs</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    ...styles.menuBoton,
                    flexDirection: 'row',
                }}
                onPress={ () => navigation.navigate('Settings') }
            >
                <Icon name="basketball-outline" size={20} color="indigo" />
                <Text style={ styles.menuTexto }> Ajustes</Text>
            </TouchableOpacity>
        </View>
        </DrawerContentScrollView>
    );
};
