import React from 'react';
import styled, {useTheme} from 'styled-components/native';
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
  const theme = useTheme();

  return (
    <Image source={require('../../../assets/woman.jpg')}>
      <LinearGradient
        colors={[theme.palette.primary, theme.palette.secondary]}
        style={{opacity: 0.8}}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#0000"
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
