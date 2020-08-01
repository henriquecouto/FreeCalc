import styled from 'styled-components/native';

type TitleTextProps = {
  small?: boolean;
  color?: string;
};

export const TitleText = styled.Text<TitleTextProps>`
  font-family: 'BalooTammudu2-Bold';
  font-size: ${(props) => (props.small ? '42px' : '64px')};
  color: ${(props) => props.color || props.theme.palette.white};
`;

type DefaultTextProps = {
  color?: string;
};

export const SubTitleText = styled.Text<DefaultTextProps>`
  font-family: 'Roboto-Medium';
  font-size: 30px;
  color: ${(props) => props.color || props.theme.palette.white};
`;

export const BodyText = styled.Text<DefaultTextProps>`
  font-family: 'Roboto-Regular';
  font-size: 24px;
  color: ${(props) => props.color || props.theme.palette.white};
`;

export const CaptionText = styled.Text<DefaultTextProps>`
  font-family: 'Roboto-Regular';
  font-size: 18px;
  color: ${(props) => props.color || props.theme.palette.white};
`;

export const Bold = styled.Text`
  font-weight: bold;
`;
