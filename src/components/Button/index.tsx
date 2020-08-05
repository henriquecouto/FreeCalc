import React from 'react';
import styled from 'styled-components/native';
import {Dimensions, TouchableOpacityProps} from 'react-native';
import {Body} from '../Text';

const {width} = Dimensions.get('window');

const Touchable = styled.TouchableOpacity<Props>`
  background-color: ${(props) =>
    props.transparent ? '#0000' : props.theme.palette.secondary};
  border-radius: ${(props) => (props.fullWidth ? '0px' : '25px')};
  padding: 15px;
  width: ${(props) => (props.fullWidth ? `${width}px` : '100%')};
  align-items: center;
`;

interface Props extends TouchableOpacityProps {
  fullWidth?: boolean;
  transparent?: boolean;
  color?: string;
}

const Button: React.ElementType<Props> = ({children, color, ...props}) => {
  return (
    <Touchable activeOpacity={0.8} {...props}>
      <Body color={color}>{children}</Body>
    </Touchable>
  );
};

export default Button;
