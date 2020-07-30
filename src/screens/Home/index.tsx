import React, {useState} from 'react';
import {LayoutAnimation, StyleSheet} from 'react-native';
import {TitleText, BodyText} from '../../components/Text';
import {Container} from '../../components/Container';
import {Card} from '../../components/Card';
import Button from '../../components/Button';

const Home: React.FC = () => {
  const [opened, setOpened] = useState(false);

  const handleOpened = () => {
    setOpened((old) => !old);
  };

  return (
    <>
      <Container style={styles.container}>
        <TitleText small={opened}>FreeCalc</TitleText>
        <BodyText style={styles.bodyText}>
          Não tenha mais dúvidas na hora de decidir o preço de um projeto
        </BodyText>
      </Container>
      <Card style={[styles.card, opened && styles.cardHeight]}>
        <Button onPress={handleOpened}>Quero calcular agora!</Button>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  container: {justifyContent: 'space-between'},
  bodyText: {textAlign: 'center'},
  cardHeight: {position: 'absolute', height: '85%'},
  card: {
    bottom: 0,
    width: '100%',
  },
});

export default Home;
