import React, {useEffect, useState} from 'react';
import {StatusBar, BackHandler, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled, {useTheme} from 'styled-components/native';
import {MaskService} from 'react-native-masked-text';

import SafeAreaView from '../../components/SafeAreaView';
import Header from '../../components/Header';
import Button from '../../components/Button';
import MonthValue from './MonthValue';
import HourDaily from './HourDaily';
import DaysWeek from './DaysWeek';
import Result from './Result';

const Container = styled.View`
  justify-content: space-between;
  /* height: 100%; */
  padding: 0 30px;
`;

type PropsQuestions = {
  step: number;
};

const Questions: React.FC<PropsQuestions> = ({step}) => {
  const [monthValue, setMonthValue] = useState('0');
  const [hourDaily, setHourDaily] = useState('0');
  const [daysWeek, setDaysWeek] = useState('0');

  const [hourValue, setHourValue] = useState('0');

  useEffect(() => {
    const newHourValue = Math.ceil(
      Number(MaskService.toRawValue('money', monthValue)) /
        (Number(daysWeek) * 4 * Number(hourDaily)),
    ).toFixed(2);

    setHourValue(newHourValue);
  }, [monthValue, hourDaily, daysWeek]);

  console.log({hourValue}, typeof hourValue);

  switch (step) {
    case 1:
      return <MonthValue value={monthValue} setValue={setMonthValue} />;
    case 2:
      return <HourDaily value={hourDaily} setValue={setHourDaily} />;
    case 3:
      return <DaysWeek value={daysWeek} setValue={setDaysWeek} />;
    case 4:
      return (
        <Result
          value={MaskService.toMask('money', String(hourValue), {unit: 'R$'})}
        />
      );
    default:
      return null;
  }
};

const HourCalc: React.FC = () => {
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
    <SafeAreaView style={{backgroundColor: theme.palette.white}}>
      <StatusBar
        translucent
        backgroundColor="#0000"
        barStyle="dark-content"
        animated
      />
      <Header
        leftButton={
          step > 1 ? {icon: 'arrow-left', action: previousStep} : undefined
        }
        rightButton={{icon: 'x', action: navigation.goBack}}
      />
      <Container>
        <Questions step={step} />
      </Container>
      <View>
        {step < 4 && (
          <Button fullWidth onPress={nextStep}>
            Avançar
          </Button>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HourCalc;
