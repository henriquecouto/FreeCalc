import React, {useEffect, useState} from 'react';
import {useTheme} from 'styled-components';
import {Card} from '../../components/Card';
import {BodyText} from '../../components/Text';
import {Dimensions, StyleSheet, View, BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';

import MonthValue from './MonthValue';
import HourDaily from './HourDaily';
import DaysWeek from './DaysWeek';
import Result from './Result';

const {height} = Dimensions.get('window');

type PropsQuestions = {
  step: number;
};

const Questions: React.FC<PropsQuestions> = ({step}) => {
  const [monthValue, setMonthValue] = useState('0');
  const [hourDaily, setHourDaily] = useState('');
  const [daysWeek, setDaysWeek] = useState('');

  const [hourValue, setHourValue] = useState(0);

  useEffect(() => {
    let newMonthValue = monthValue
      .replace(/\./g, '')
      .replace('R$', '')
      .replace(',', '.');

    setHourValue(
      Number(newMonthValue) / (Number(daysWeek) * 4 * Number(hourDaily)),
    );
  }, [monthValue, hourDaily, daysWeek]);

  switch (step) {
    case 1:
      return <MonthValue value={monthValue} setValue={setMonthValue} />;
    case 2:
      return <HourDaily value={hourDaily} setValue={setHourDaily} />;
    case 3:
      return <DaysWeek value={daysWeek} setValue={setDaysWeek} />;
    case 4:
      return <Result value={String(Math.round(hourValue).toFixed(2))} />;
    default:
      return null;
  }
};

// Cálculo => monthValue / (daysWeek*4,4*hoursDay)

const Hour: React.FC = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const [step, setStep] = useState(1);

  const nextStep = () => setStep((old) => old + 1);
  const previousStep = () => setStep((old) => old - 1);

  useEffect(() => {
    const backAction = () => {
      if (step > 1) {
        previousStep();
      } else {
        navigation.goBack();
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [step, navigation]);

  return (
    <Card style={styles.root}>
      <View style={styles.content}>
        <Questions step={step} />
        {step < 4 && <Button onPress={nextStep}>Avançar</Button>}
      </View>
      <View>
        <BodyText color={theme.palette.primary}>Publicidade</BodyText>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
    paddingBottom: height * 0.2,
    justifyContent: 'space-between',
  },
  content: {justifyContent: 'space-between', height: '90%'},
});

export default Hour;
