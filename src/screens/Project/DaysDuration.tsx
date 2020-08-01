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
        <Bold>Quantos dias</Bold> você irá trabalhar no <Bold>projeto</Bold>?
      </SubTitleText>
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
