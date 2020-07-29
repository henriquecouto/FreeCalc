import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {Dimensions, StatusBar, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {transparentize} from 'polished';

const Image = styled.ImageBackground`
  flex: 1;
  width: ${Dimensions.get('window').width}px;
  height: ${Dimensions.get('window').height}px;
`;

const AreaView = styled.SafeAreaView`
  height: ${Dimensions.get('window').height}px;
  padding-top: ${StatusBar.currentHeight}px;
`;

const Background: React.FC = ({children}) => {
  const theme = useTheme();

  return (
    <Image source={require('../../../assets/woman.jpg')}>
      <LinearGradient
        colors={[
          transparentize(0.2, theme.palette.primary),
          transparentize(0.2, theme.palette.secondary),
        ]}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#0000"
          translucent
          animated
        />
        <ScrollView>
          <AreaView>{children}</AreaView>
        </ScrollView>
      </LinearGradient>
    </Image>
  );
};

export default Background;
