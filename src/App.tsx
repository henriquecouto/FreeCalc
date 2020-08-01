import React from 'react';
import Background from './components/Background';
import {ThemeProvider} from 'styled-components/native';
import defaultTheme from './styles/themes/default';
import {Platform, UIManager} from 'react-native';
import Home from './screens/Home';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Background>
        <Home />
      </Background>
    </ThemeProvider>
  );
};

export default App;
