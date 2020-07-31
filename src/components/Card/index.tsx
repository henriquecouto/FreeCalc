import styled from 'styled-components/native';

type CardProps = {
  height?: number;
};

export const Card = styled.View<CardProps>`
  height: ${(props) => (props.height ? props.height + 'px' : 'auto')};
  background-color: ${(props) => props.theme.palette.white};
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  display: flex;
  /* align-items: center; */
  padding: 25px;
  height: 100%;
`;
