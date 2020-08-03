import React from 'react';
import {ThemeProvider} from 'styled-components';

import Theme from './src/styles/themes/default';
import Home from './src/screens/Home';
import {StatusBar} from 'react-native';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <StatusBar
        translucent
        backgroundColor="#0000"
        barStyle="light-content"
        animated
      />
      <Home />
    </ThemeProvider>
  );
};

export default App;
