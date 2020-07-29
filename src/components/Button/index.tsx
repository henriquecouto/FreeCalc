import React from 'react';
import styled from 'styled-components/native';
import {BodyText} from '../Text';

const Touchable = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.palette.secondary};
  border-radius: 25px;
  padding: 15px;
  width: 100%;
  align-items: center;
`;

const Button: React.FC = ({children}) => {
  return (
    <Touchable>
      <BodyText>{children}</BodyText>
    </Touchable>
  );
};

export default Button;
