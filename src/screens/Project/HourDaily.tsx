import React from 'react';
import {useTheme} from 'styled-components';
import {MaskedInput} from '../../components/Input';
import {Bold, SubTitleText} from '../../components/Text';

type Props = {
  value: string;
  setValue: (text: string) => void;
};

const HourDaily: React.FC<Props> = ({value, setValue}) => {
  const theme = useTheme();

  return (
    <>
      <SubTitleText color={theme.palette.primary}>
        <Bold>Quantas horas</Bold> por dia você irá trabalhar no{' '}
        <Bold>projeto</Bold>?
      </SubTitleText>
      <MaskedInput
        autoFocus
        type="datetime"
        options={{format: 'HH'}}
        maxLength={2}
        value={value}
        onChangeText={(text) => Number(text) <= 24 && setValue(text)}
      />
    </>
  );
};

export default HourDaily;
