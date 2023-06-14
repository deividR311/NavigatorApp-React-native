import React, { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationParams, NavigationRoute } from '../navigator/interfaces';
import { DrawerScreenProps } from '@react-navigation/drawer';



interface Props extends DrawerScreenProps<NavigationParams, NavigationRoute.Page1Screen>{}

const Page1Screen = ( { navigation } : Props ) => {

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity  onPress={() => navigation.openDrawer()} >
          <Text>Menú</Text>
        </TouchableOpacity>
      ),
    });
  }, []);


  return (
    <View>
      <Text>Page1Screen</Text>

      <Button
        title="Go to page 2"
        onPress={ () => navigation.navigate(NavigationRoute.Page2Screen) }
       />

      <Text>
        Navigation with arguments
      </Text>

      <TouchableOpacity
        onPress={ () => navigation.navigate(NavigationRoute.PeopleScreen, {
          id : 1,
          nombre : 'pedro',
        })}
      >
        <Text>Pedro</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page1Screen;
