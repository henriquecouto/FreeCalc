import React, {useState} from 'react';
import {Animated, Dimensions, StatusBar, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled, {useTheme} from 'styled-components/native';
import {transparentize} from 'polished';
import {Body, Title} from '../../components/Text';
import Button from '../../components/Button';
import {Card} from '../../components/Card';

const {height: screenHeight} = Dimensions.get('window');

const ImageBackground = styled.ImageBackground`
  flex: 1;
`;

const SafeAreaView = styled.SafeAreaView`
  padding-top: ${StatusBar.currentHeight || 0}px;
  height: 100%;
  width: 100%;

  justify-content: space-between;
`;

const Container = styled.View`
  padding: 15px;
  align-items: center;
  justify-content: space-between;
  height: 80%;
`;

const Home: React.FC = () => {
  const theme = useTheme();
  const [cardOpened, setCardOpened] = useState(false);

  const [cardHeight] = useState(
    new Animated.Value(StatusBar.currentHeight || 0),
  );
  const [titleSize] = useState(new Animated.Value(1));

  const open = () => {
    Animated.parallel([
      Animated.spring(cardHeight, {
        toValue: -screenHeight * 0.6,
        useNativeDriver: true,
        friction: 4,
        tension: 6,
      }),
      Animated.spring(titleSize, {
        toValue: 0.7,
        useNativeDriver: true,
      }),
    ]).start();

    setCardOpened(true);
  };

  return (
    <ImageBackground source={require('../../../assets/woman.jpg')}>
      <LinearGradient
        colors={[
          transparentize(0.2, theme.palette.primary),
          transparentize(0.2, theme.palette.secondary),
        ]}>
        <SafeAreaView>
          <Container>
            <Title>FreeCalc</Title>
            <Body style={styles.body}>
              Não tenha mais dúvidas na hora de decidir o preço de um projeto
            </Body>
          </Container>
          <Animated.View
            style={[
              styles.animatedView,
              {transform: [{translateY: cardHeight}]},
            ]}>
            <Card>
              {!cardOpened && (
                <Button onPress={open}>Quero calcular agora!</Button>
              )}
            </Card>
          </Animated.View>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    textAlign: 'center',
  },
  animatedView: {
    width: '100%',
    height: '100%',
  },
});

export default Home;
