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

  const open = () => {
    Animated.spring(cardHeight, {
      toValue: height * 0.2,
      useNativeDriver: true,
      friction: 5,
    }).start();

    setOpened(true);
  };

  return (
    <>
      <Container style={styles.container}>
        <TitleText small={opened}>FreeCalc</TitleText>
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
  container: {justifyContent: 'space-between'},
  bodyText: {textAlign: 'center'},
  cardView: {
    height: height,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default Home;
