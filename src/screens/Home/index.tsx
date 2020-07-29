import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TitleText, BodyText} from '../../components/Text';
import {Container} from '../../components/Container';
import {Card} from '../../components/Card';

const Home: React.FC = () => {
  return (
    <>
      <Container style={styles.container}>
        <TitleText>FreeCalc</TitleText>
        <View>
          <BodyText style={{textAlign: 'center'}}>
            Não tenha mais dúvidas na hora de decidir o preço de um projeto
          </BodyText>
        </View>
      </Container>
      <Card>
        <Text>Hehehe</Text>
      </Card>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
});

export default Home;
