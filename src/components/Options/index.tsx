import React, {useEffect, useState} from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';
import {useTheme} from 'styled-components';
import Button from '../Button';
import {SubTitleText, BodyText} from '../Text';

const {height} = Dimensions.get('window');

const Options: React.FC = () => {
  const theme = useTheme();
  const [scaleSubtitle] = useState(new Animated.Value(0));
  const [button1] = useState(new Animated.Value(400));
  const [button2] = useState(new Animated.Value(400));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleSubtitle, {
        toValue: 1,
        useNativeDriver: true,
        delay: 400,
      }),
      Animated.spring(button1, {
        toValue: 0,
        useNativeDriver: true,
        delay: 600,
      }),
      Animated.spring(button2, {
        toValue: 0,
        useNativeDriver: true,
        delay: 800,
      }),
    ]).start();
  }, [scaleSubtitle, button1, button2]);

  return (
    <View style={styles.root}>
      <Animated.View style={{transform: [{scale: scaleSubtitle}]}}>
        <SubTitleText color={theme.palette.primary} style={styles.subtitle}>
          O que você deseja calcular?
        </SubTitleText>
      </Animated.View>
      <View>
        <Animated.View style={{transform: [{translateX: button1}]}}>
          <Button style={styles.button}>O seu valor/hora</Button>
        </Animated.View>
        <Animated.View style={{transform: [{translateX: button2}]}}>
          <Button style={styles.button}>O valor de um projeto</Button>
        </Animated.View>
      </View>
      <View>
        <BodyText color={theme.palette.primary}>Publicidade</BodyText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
    justifyContent: 'space-between',
    paddingBottom: height * 0.2,
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

export default Options;
