import Styled, { css } from 'styled-components';

const Circle= Styled.span `
  flex-grow: 0;
  display: inline-block;
  margin: 3px;
  height: 20px;
  width: 20px;
  border-radius: 20px;
  background: #EDEDED;

  ${props => props.isFull
    && css`
    background: #2667A8;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: blinkCircle;
  
    @keyframes blinkCircle {
      0% {opacity: 0; }
      100% {opacity: 1;}
    }
    `}
`;

export default Circle;
