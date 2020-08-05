import styled from 'styled-components/native';
import {StatusBar} from 'react-native';

const SafeAreaView = styled.SafeAreaView`
  padding-top: ${StatusBar.currentHeight || 0}px;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;

export default SafeAreaView;
