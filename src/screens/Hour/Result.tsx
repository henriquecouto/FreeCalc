import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  ToastAndroid,
} from 'react-native';
import {useTheme} from 'styled-components';
import {MaskedInput} from '../../components/Input';
import {Bold, SubTitleText, CaptionText} from '../../components/Text';
import Clipboard from '@react-native-community/clipboard';

type Props = {
  value: string;
};

const Result: React.FC<Props> = ({value}) => {
  const theme = useTheme();

  const copy = () => {
    Clipboard.setString('R$' + value.replace('.', ','));
    ToastAndroid.show(
      'Copiado para área de transferência!',
      ToastAndroid.BOTTOM,
    );
  };

  return (
    <>
      <SubTitleText color={theme.palette.primary}>
        Aqui está o seu novo <Bold>valor por hora</Bold>!!
      </SubTitleText>
      <TouchableWithoutFeedback onPress={copy}>
        <View>
          <MaskedInput
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
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.footer}>
        <CaptionText color={theme.palette.primary}>
          Toque no valor para copiar
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
    fontFamily: 'BalooTammudu2-Bold',
    fontSize: 64,
  },
});

export default Result;