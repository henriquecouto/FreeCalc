import React from 'react';
import {useTheme} from 'styled-components';
import {BodyText} from '../Text';

const Options: React.FC = () => {
  const theme = useTheme();
  return <BodyText color={theme.palette.primary}>Options component</BodyText>;
};

export default Options;
