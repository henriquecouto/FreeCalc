import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from 'styled-components';
import {MaskedInput} from '../../components/Input';
import {Bold, SubTitleText, CaptionText} from '../../components/Text';

type Props = {
  value: string;
};

const Result: React.FC<Props> = ({value}) => {
  const theme = useTheme();

  // const copy = () => {
  //   Clipboard.setString('R$' + value.replace('.', ','));
  //   ToastAndroid.show(
  //     'Copiado para área de transferência!',
  //     ToastAndroid.BOTTOM,
  //   );
  // };

  return (
    <>
      <SubTitleText color={theme.palette.primary}>
        Aqui está o valor total do <Bold>projeto</Bold>!!
      </SubTitleText>
      <MaskedInput
        type="money"
        options={{
          precision: 2,
          separator: ',',
          delimiter: '.',
          unit: 'R$',
          suffixUnit: '',
        }}
        value={value}
        style={[styles.result, {color: theme.palette.primary}]}
        showSoftInputOnFocus={false}
        selectTextOnFocus={true}
        selectionColor="#0000"
        autoFocus
      />
      <View style={styles.footer}>
        <CaptionText color={theme.palette.primary}>
          Toque e segure no valor para copiar
        </CaptionText>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    width: '100%',
  },
  result: {
    fontFamily: 'Roboto-Bold',
    fontSize: 64,
  },
});

export default Result;
