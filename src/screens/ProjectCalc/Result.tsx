import Clipboard from '@react-native-community/clipboard';
import React, {useEffect} from 'react';
import {StyleSheet, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {useTheme} from 'styled-components';
import {Bold, SubTitle, Caption, Title} from '../../components/Text';

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

  useEffect(() => {
    ToastAndroid.show(value, ToastAndroid.BOTTOM);
  }, [value]);

  return (
    <>
      <SubTitle color={theme.palette.primary}>
        Aqui está o valor total do <Bold>projeto</Bold>!!
      </SubTitle>
      <TouchableOpacity
        activeOpacity={0.6}
        onLongPress={copy}
        style={styles.resultContainer}>
        <Title small numberOfLines={1} color={theme.palette.primary}>
          {value}
        </Title>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Caption color={theme.palette.primary}>
          Toque e segure no valor para copiar
        </Caption>
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
  },
});

export default Result;
