import React from 'react';
import { View, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigationParams, NavigationRoute } from '../navigator/interfaces';

interface Props extends StackScreenProps<NavigationParams, NavigationRoute.PeopleScreen>{}

const PeopleScreen = ( { route } : Props ) => {

  const params = route.params;
  return (
    <View>
      <Text> { JSON.stringify( params, null, 3 ) } </Text>
    </View>
  );
};

export default PeopleScreen;
