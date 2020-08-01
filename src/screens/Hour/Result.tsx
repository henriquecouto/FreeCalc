import React from 'react';
import {StyleSheet} from 'react-native';
import {useTheme} from 'styled-components';
import {MaskedInput} from '../../components/Input';
import {Bold, SubTitleText} from '../../components/Text';

type Props = {
  value: string;
};

const Result: React.FC<Props> = ({value}) => {
  const theme = useTheme();
  return (
    <>
      <SubTitleText color={theme.palette.primary}>
        Aqui está o seu novo <Bold>valor por hora</Bold>!!
      </SubTitleText>
      <MaskedInput
        autoFocus
        type="money"
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: 'R$',
          suffixUnit: '',
        }}
        editable={false}
        value={value}
        style={[styles.result, {color: theme.palette.primary}]}
      />
    </>
  );
};

const styles = StyleSheet.create({
  result: {
    fontFamily: 'BalooTammudu2-Bold',
    fontSize: 64,
  },
});

export default Result;
