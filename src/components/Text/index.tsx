import styled from 'styled-components/native';

type TitleTextProps = {
  small?: boolean;
};

export const TitleText = styled.Text<TitleTextProps>`
  font-family: 'BalooTammudu2-Bold';
  font-size: ${(props) => (props.small ? '42px' : '64px')};
  color: ${(props) => props.theme.palette.white};
`;

type SubTitleTextProps = {
  color?: string;
};

export const SubTitleText = styled.Text<SubTitleTextProps>`
  font-family: 'Roboto-Medium';
  font-size: 30px;
  color: ${(props) => props.color || props.theme.palette.white};
`;

type BodyTextProps = {
  color?: string;
};

export const BodyText = styled.Text<BodyTextProps>`
  font-family: 'Roboto-Regular';
  font-size: 24px;
  color: ${(props) => props.color || props.theme.palette.white};
`;
