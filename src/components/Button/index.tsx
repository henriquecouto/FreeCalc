import React from 'react';
import styled from 'styled-components/native';
import {TouchableOpacityProps} from 'react-native';
import {BodyText} from '../Text';

const Touchable = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.palette.secondary};
  border-radius: 25px;
  padding: 15px;
  width: 100%;
  align-items: center;
`;

interface Props extends TouchableOpacityProps {}

const Button: React.ElementType<Props> = ({children, ...props}) => {
  return (
    <Touchable activeOpacity={0.8} {...props}>
      <BodyText>{children}</BodyText>
    </Touchable>
  );
};

export default Button;
