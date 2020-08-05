import React, {useEffect, useState} from 'react';
import {StatusBar, BackHandler, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled, {useTheme} from 'styled-components/native';
import {MaskService} from 'react-native-masked-text';

import SafeAreaView from '../../components/SafeAreaView';
import Header from '../../components/Header';
import Button from '../../components/Button';
import HourDaily from './HourDaily';
import HourValue from './HourValue';
import DaysDuration from './DaysDuration';
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
  const [hourValue, setHourValue] = useState('0');
  const [hourDaily, setHourDaily] = useState('0');
  const [daysDuration, setDaysDuration] = useState('0');

  const [projectValue, setProjectValue] = useState('0');

  useEffect(() => {
    const newProjectValue = Math.ceil(
      Number(MaskService.toRawValue('money', hourValue)) *
        Number(hourDaily) *
        Number(daysDuration),
    ).toFixed(2);

    setProjectValue(newProjectValue);
  }, [hourValue, hourDaily, daysDuration]);

  console.log({hourValue}, typeof hourValue);

  switch (step) {
    case 1:
      return <HourValue value={hourValue} setValue={setHourValue} />;
    case 2:
      return <HourDaily value={hourDaily} setValue={setHourDaily} />;
    case 3:
      return <DaysDuration value={daysDuration} setValue={setDaysDuration} />;
    case 4:
      return (
        <Result
          value={MaskService.toMask('money', String(projectValue), {
            unit: 'R$',
          })}
        />
      );
    default:
      return null;
  }
};

const ProjectCalc: React.FC = () => {
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

export default ProjectCalc;
