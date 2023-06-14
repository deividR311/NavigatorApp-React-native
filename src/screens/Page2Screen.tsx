import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { NavigationParams, NavigationRoute } from '../navigator/interfaces';

type NavigationProps = StackNavigationProp<NavigationParams>;

const Page2Screen = () => {
  const navigator = useNavigation<NavigationProps>();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hi world',
      headerBackTitle: 'goBack',
    });
  }, []);

  return (
    <View>
      <Text>Page2Screen</Text>

      <Button
        title="Go to page 3"
        onPress={ () => navigator.navigate(NavigationRoute.Page3Screen) }
       />
    </View>
  );
};

export default Page2Screen;
