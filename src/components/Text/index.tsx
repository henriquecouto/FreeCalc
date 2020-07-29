import styled from 'styled-components/native';

export const TitleText = styled.Text`
  font-family: 'BalooTammudu2-Bold';
  font-size: 64px;
  color: ${(props) => props.theme.palette.white};
`;

type BodyTextProps = {
  color?: string;
};

export const BodyText = styled.Text<BodyTextProps>`
  font-family: 'Roboto-Regular';
  font-size: 24px;
  color: ${(props) => props.color || props.theme.palette.white};
`;
