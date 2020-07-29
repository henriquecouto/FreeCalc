import React from 'react';
import styled from 'styled-components/native';
import {Dimensions, StatusBar, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Image = styled.ImageBackground`
  flex: 1;
  width: ${Dimensions.get('screen').width}px;
  height: ${Dimensions.get('screen').height}px;
`;

const AreaView = styled.SafeAreaView`
  height: ${Dimensions.get('screen').height}px;
  padding-top: ${StatusBar.currentHeight}px;
`;

const Background: React.FC = ({children}) => {
  return (
    <Image source={require('../../../assets/woman.jpg')}>
      <LinearGradient colors={['#3355FF', '#7C4FFF']} style={{opacity: 0.8}}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#3355ff00"
          translucent
          animated
        />
        <AreaView>
          <ScrollView>{children}</ScrollView>
        </AreaView>
      </LinearGradient>
    </Image>
  );
};

export default Background;
