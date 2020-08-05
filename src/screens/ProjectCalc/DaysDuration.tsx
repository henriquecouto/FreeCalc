import React from 'react';
import {useTheme} from 'styled-components';
import {MaskedInput} from '../../components/Input';
import {Bold, SubTitle} from '../../components/Text';

type Props = {
  value: string;
  setValue: (text: string) => void;
};

const DaysWeek: React.FC<Props> = ({value, setValue}) => {
  const theme = useTheme();

  return (
    <>
      <SubTitle color={theme.palette.primary}>
        <Bold>Quantos dias</Bold> você irá trabalhar no <Bold>projeto</Bold>?
      </SubTitle>
      <MaskedInput
        autoFocus
        type="only-numbers"
        value={value}
        onChangeText={setValue}
      />
    </>
  );
};

export default DaysWeek;
