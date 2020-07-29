import React from 'react';
import Background from './components/Background';
import Home from './screens/Home';

const App: React.FC = () => {
  return (
    <Background>
      <Home />
    </Background>
  );
};

export default App;
