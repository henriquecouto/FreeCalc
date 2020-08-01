import React from 'react';
import styled from 'styled-components/native';
import {Dimensions, TouchableOpacityProps} from 'react-native';
import {BodyText} from '../Text';

const {width} = Dimensions.get('window');

const Touchable = styled.TouchableOpacity<Props>`
  background-color: ${(props) => props.theme.palette.secondary};
  border-radius: ${(props) => (props.fullWidth ? '0px' : '25px')};
  padding: 15px;
  width: ${(props) => (props.fullWidth ? `${width}px` : '100%')};
  margin-left: ${(props) => (props.fullWidth ? '-25px' : '0px')};
  align-items: center;
`;

interface Props extends TouchableOpacityProps {
  fullWidth?: boolean;
}

const Button: React.ElementType<Props> = ({children, ...props}) => {
  return (
    <Touchable activeOpacity={0.8} {...props}>
      <BodyText>{children}</BodyText>
    </Touchable>
  );
};

export default Button;
