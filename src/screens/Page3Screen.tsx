import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { NavigationParams } from '../navigator/interfaces';

interface Props extends StackScreenProps<NavigationParams>{}

const Page3Screen = ( { navigation } : Props ) => {
  return (
    <View>
      <Text>Page3Screen</Text>

      <Button
        title="GoBack"
        onPress={ () => navigation.pop() }
      />

      <Button
        title="GoPage1"
        onPress={ () => navigation.popToTop() }
      />
    </View>
  );
};

export default Page3Screen;
