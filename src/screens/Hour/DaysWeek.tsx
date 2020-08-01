import React from 'react';
import {useTheme} from 'styled-components';
import {MaskedInput} from '../../components/Input';
import {Bold, SubTitleText} from '../../components/Text';

type Props = {
  value: string;
  setValue: (text: string) => void;
};

const DaysWeek: React.FC<Props> = ({value, setValue}) => {
  const theme = useTheme();

  return (
    <>
      <SubTitleText color={theme.palette.primary}>
        <Bold>Quantos dias</Bold> você quer trabalhar por <Bold>semana</Bold>?
      </SubTitleText>
      <MaskedInput
        autoFocus
        type="datetime"
        options={{format: 'DD'}}
        maxLength={1}
        value={value}
        onChangeText={(text) => Number(text) <= 7 && setValue(text)}
      />
    </>
  );
};

export default DaysWeek;
