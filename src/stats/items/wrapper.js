import Styled, { css } from 'styled-components';

const Wrapper= Styled.div `
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  ${props => props.animate
    && css`
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-name: blinkCircle;
  
    @keyframes blinkCircle {
      0% {opacity: 1; }
      50% {opacity: 0; }
      100% {opacity: 1;}
    }
    `}
`;

export default Wrapper;
