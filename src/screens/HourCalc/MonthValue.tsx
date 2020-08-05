import React from 'react';
import {useTheme} from 'styled-components';
import {MaskedInput} from '../../components/Input';
import {Bold, SubTitle} from '../../components/Text';

type Props = {
  value: string;
  setValue: (text: string) => void;
};

const MonthValue: React.FC<Props> = ({value, setValue}) => {
  const theme = useTheme();

  return (
    <>
      <SubTitle color={theme.palette.primary}>
        <Bold>Quanto</Bold> você quer ganhar por <Bold>mês</Bold>?
      </SubTitle>
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
        value={value}
        onChangeText={setValue}
      />
    </>
  );
};

export default MonthValue;
