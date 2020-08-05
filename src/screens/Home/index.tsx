import React, {useState} from 'react';
import {Animated, Dimensions, StatusBar, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import styled, {useTheme} from 'styled-components/native';
import {transparentize} from 'polished';
import {Body, SubTitle, Title} from '../../components/Text';
import Button from '../../components/Button';
import {Card} from '../../components/Card';
import SafeAreaView from '../../components/SafeAreaView';

const {height: screenHeight, width: screenWidth} = Dimensions.get('window');

const ImageBackground = styled.ImageBackground`
  flex: 1;
`;

const Container = styled.View`
  padding: 15px;
  align-items: center;
  justify-content: space-between;
  height: 80%;
`;

const Home: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const [cardOpened, setCardOpened] = useState(false);
  const [cardHeight] = useState(
    new Animated.Value(StatusBar.currentHeight || 0),
  );

  const [titleSize] = useState(new Animated.Value(1));
  const [scaleSubtitle] = useState(new Animated.Value(0));
  const [button1] = useState(new Animated.Value(screenWidth));
  const [button2] = useState(new Animated.Value(screenWidth));

  const openCard = () => {
    Animated.parallel([
      Animated.spring(cardHeight, {
        toValue: -screenHeight * 0.55,
        useNativeDriver: true,
        friction: 4,
        tension: 6,
      }),
      Animated.spring(titleSize, {
        toValue: 0.7,
        useNativeDriver: true,
      }),
      Animated.spring(scaleSubtitle, {
        toValue: 1,
        useNativeDriver: true,
        delay: 200,
      }),
      Animated.spring(button1, {
        toValue: 0,
        useNativeDriver: true,
        delay: 400,
      }),
      Animated.spring(button2, {
        toValue: 0,
        useNativeDriver: true,
        delay: 500,
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
              {cardOpened ? (
                <>
                  <Animated.View style={{transform: [{scale: scaleSubtitle}]}}>
                    <SubTitle
                      color={theme.palette.primary}
                      style={styles.subtitle}>
                      O que você deseja calcular?
                    </SubTitle>
                  </Animated.View>
                  <View>
                    <Animated.View style={{transform: [{translateX: button1}]}}>
                      <Button
                        onPress={() => navigation.navigate('HourCalc')}
                        style={styles.button}>
                        O seu valor/hora
                      </Button>
                    </Animated.View>
                    <Animated.View style={{transform: [{translateX: button2}]}}>
                      <Button
                        onPress={() => navigation.navigate('ProjectCalc')}
                        style={styles.button}>
                        O valor de um projeto
                      </Button>
                    </Animated.View>
                  </View>
                </>
              ) : (
                <Button onPress={openCard}>Quero calcular agora!</Button>
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
  subtitle: {
    marginBottom: 20,
  },
  button: {
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
});

export default Home;
