import React from 'react';
import {View} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import styled, {useTheme} from 'styled-components/native';
import Button from '../Button';
Icon.loadFont();

const Container = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

type HeaderProps = {
  leftButton?: {icon: string; action: () => void};
  rightButton?: {icon: string; action: () => void};
};

const Header: React.FC<HeaderProps> = ({leftButton, rightButton}) => {
  const theme = useTheme();

  return (
    <Container>
      <View>
        {leftButton && (
          <Button transparent onPress={leftButton.action}>
            <Icon
              name={leftButton.icon}
              size={30}
              color={theme.palette.secondary}
            />
          </Button>
        )}
      </View>
      <View>
        {rightButton && (
          <Button transparent onPress={rightButton.action}>
            <Icon
              name={rightButton.icon}
              size={30}
              color={theme.palette.secondary}
            />
          </Button>
        )}
      </View>
    </Container>
  );
};

export default Header;
