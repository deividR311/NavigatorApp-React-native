import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../themes/appTheme';

const Tab1Screen = () => {
  return (
    <View style={ styles.globalMargin }>
      <Text style={styles.title}> Icons </Text>
      <Text>
        <Icon name="airplane-outline" size={30} color="#900" />
        <Icon name="basketball-outline" size={30} color="#900" />
        <Icon name="american-football-outline" size={30} color="#900" />
        <Icon name="bandage-outline" size={30} color="#900" />
        <Icon name="bicycle-outline" size={30} color="#900" />
        <Icon name="bus-outline" size={30} color="#900" />
      </Text>
    </View>
  );
};

export default Tab1Screen;
