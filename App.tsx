import React from 'react';
import {ThemeProvider} from 'styled-components';

import Theme from './src/styles/themes/default';
import {StatusBar, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import admob, {
  MaxAdContentRating,
  BannerAd,
  BannerAdSize,
} from '@react-native-firebase/admob';
import {bannerId} from './src/config/ad';

import Home from './src/screens/Home';
import HourCalc from './src/screens/HourCalc';
import ProjectCalc from './src/screens/ProjectCalc';

admob().setRequestConfiguration({
  // Update all future requests suitable for parental guidance
  maxAdContentRating: MaxAdContentRating.PG,

  // Indicates that you want your content treated as child-directed for purposes of COPPA.
  tagForChildDirectedTreatment: true,

  // Indicates that you want the ad request to be handled in a
  // manner suitable for users under the age of consent.
  tagForUnderAgeOfConsent: true,
});

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
      <View style={styles.adBanner}>
        <BannerAd unitId={bannerId} size={BannerAdSize.SMART_BANNER} />
      </View>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  adBanner: {
    // marginLeft: -25,
    // position: 'relative',
    bottom: 0,
  },
});

export default App;
