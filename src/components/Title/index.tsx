import React from 'react';
import styled from 'styled-components';
import {Text} from 'react-native';

const Style = styled(Text)`
  font-family: 'BalooTammudu2-Bold';
  font-size: 50px;
`;

const Title: React.FC = ({children}) => <Style>{children}</Style>;

export default Title;
