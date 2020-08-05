import React from 'react';
import {ThemeProvider} from 'styled-components';

import Theme from './src/styles/themes/default';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './src/screens/Home';
import HourCalc from './src/screens/HourCalc';
import ProjectCalc from './src/screens/ProjectCalc';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <StatusBar
        translucent
        backgroundColor="#0000"
        barStyle="light-content"
        animated
      />
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="HourCalc" component={HourCalc} />
          <Stack.Screen name="ProjectCalc" component={ProjectCalc} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
