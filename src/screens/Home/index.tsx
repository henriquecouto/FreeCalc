import React from 'react';
import {StyleSheet} from 'react-native';
import {TitleText, BodyText} from '../../components/Text';
import {Container} from '../../components/Container';
import {Card} from '../../components/Card';
import Button from '../../components/Button';

const Home: React.FC = () => {
  return (
    <>
      <Container style={styles.container}>
        <TitleText>FreeCalc</TitleText>
        <BodyText style={styles.bodyText}>
          Não tenha mais dúvidas na hora de decidir o preço de um projeto
        </BodyText>
      </Container>
      <Card>
        <Button onPress={() => console.log('hehe')}>
          Quero calcular agora!
        </Button>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  bodyText: {
    textAlign: 'center',
  },
});

export default Home;
