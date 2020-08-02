import Clipboard from '@react-native-community/clipboard';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {useTheme} from 'styled-components';
import {
  Bold,
  SubTitleText,
  CaptionText,
  TitleText,
} from '../../components/Text';

type Props = {
  value: string;
};

const Result: React.FC<Props> = ({value}) => {
  const theme = useTheme();

  const copy = () => {
    Clipboard.setString(value);
    ToastAndroid.show(
      'Copiado para área de transferência!',
      ToastAndroid.BOTTOM,
    );
  };

  return (
    <>
      <SubTitleText color={theme.palette.primary}>
        Aqui está o valor total do <Bold>projeto</Bold>!!
      </SubTitleText>
      <TouchableOpacity
        activeOpacity={0.6}
        onLongPress={copy}
        style={styles.resultContainer}>
        <TitleText small numberOfLines={1} color={theme.palette.primary}>
          {value}
        </TitleText>
      </TouchableOpacity>
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
  resultContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Result;
