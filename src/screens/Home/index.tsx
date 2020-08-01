import React, {useState} from 'react';
import {StyleSheet, Animated, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {TitleText, BodyText} from '../../components/Text';
import {Container} from '../../components/Container';
import {Card} from '../../components/Card';
import Button from '../../components/Button';
import Options from './Options';
import Hour from '../Hour';

const Stack = createStackNavigator();
const {height} = Dimensions.get('window');

const Home: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const [cardHeight] = useState(new Animated.Value(height * 0.84));
  const [titleSize] = useState(new Animated.Value(1));

  const open = () => {
    Animated.parallel([
      Animated.spring(cardHeight, {
        toValue: height * 0.18,
        useNativeDriver: true,
        friction: 4,
        tension: 6,
      }),
      Animated.spring(titleSize, {
        toValue: 0.7,
        useNativeDriver: true,
      }),
    ]).start();

    setOpened(true);
  };

  return (
    <>
      <Container style={styles.container}>
        <Animated.View
          style={{transform: [{scaleX: titleSize}, {scaleY: titleSize}]}}>
          <TitleText>FreeCalc</TitleText>
        </Animated.View>
        <BodyText style={styles.bodyText}>
          Não tenha mais dúvidas na hora de decidir o preço de um projeto
        </BodyText>
      </Container>
      <Animated.View
        style={[styles.cardView, {transform: [{translateY: cardHeight}]}]}>
        {opened ? (
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Options"
              headerMode="none"
              screenOptions={{
                cardStyle: {backgroundColor: '#0000'},
                animationEnabled: false,
              }}>
              <Stack.Screen name="Options" component={Options} />
              <Stack.Screen name="Hour" component={Hour} />
            </Stack.Navigator>
          </NavigationContainer>
        ) : (
          <Card>
            <Animated.View>
              <Button onPress={open}>Quero calcular agora!</Button>
            </Animated.View>
          </Card>
        )}
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {justifyContent: 'space-between', marginBottom: height * 0.2},
  bodyText: {textAlign: 'center'},
  cardView: {
    height: height,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default Home;
