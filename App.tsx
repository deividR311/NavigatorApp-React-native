import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LateralMenu } from './src/navigator/LateralMenu';
import { Provider as PaperProvider } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { LateralMenuBasic } from './src/navigator/LateralMenuBasic';
const APP_THEME = {
  ...DefaultTheme,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    secondaryContainer: 'transparent',
  },
};

const App = () => {
  return (
    <NavigationContainer>
      <PaperProvider theme={APP_THEME}>
        {/* <StackNavigator /> */}
        {/* <LateralMenuBasic /> */}
        <LateralMenu />
      </PaperProvider>
    </NavigationContainer>
  );
};

export default App;
