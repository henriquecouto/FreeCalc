import React, {useState} from 'react';
import {StyleSheet, Animated, Dimensions} from 'react-native';
import {TitleText, BodyText} from '../../components/Text';
import {Container} from '../../components/Container';
import {Card} from '../../components/Card';
import Button from '../../components/Button';

const {height} = Dimensions.get('window');

const Home: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const [cardHeight] = useState(new Animated.Value(height * 0.84));
  const [titleSize] = useState(new Animated.Value(1));

  const open = () => {
    Animated.parallel([
      Animated.spring(cardHeight, {
        toValue: height * 0.2,
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
        <Card>
          {!opened && <Button onPress={open}>Quero calcular agora!</Button>}
        </Card>
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
