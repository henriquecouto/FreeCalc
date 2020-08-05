import styled from 'styled-components/native';

type TitleProps = {
  small?: boolean;
  color?: string;
};

export const Title = styled.Text<TitleProps>`
  font-family: 'BalooTammudu2-Bold';
  font-size: ${(props) => (props.small ? '42px' : '64px')};
  color: ${(props) => props.color || props.theme.palette.white};
  text-align: left;
`;

type DefaultProps = {
  color?: string;
};

export const SubTitle = styled.Text<DefaultProps>`
  font-family: 'Roboto-Medium';
  font-size: 30px;
  color: ${(props) => props.color || props.theme.palette.white};
`;

export const Body = styled.Text<DefaultProps>`
  font-family: 'Roboto-Regular';
  font-size: 24px;
  color: ${(props) => props.color || props.theme.palette.white};
`;

export const Caption = styled.Text<DefaultProps>`
  font-family: 'Roboto-Regular';
  font-size: 18px;
  color: ${(props) => props.color || props.theme.palette.white};
`;

export const Bold = styled.Text`
  font-weight: bold;
`;
