import Styled from 'styled-components';

const Dialogue= Styled.div `
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  width: 90%;
  margin: 0 auto;
  background: #FFFFFF;
  box-shadow: 0 5px 18px 0 rgba(104,104,104,0.15);
  border-radius: 6px 6px 6px 0 0 0 6px;
  position: relative;
  align-self: flex-end;
  animation-duration: .7s;
  animation-fill-mode: both;
  animation-name: fadeIn;
  }

  @keyframes fadeIn {
    0% {opacity: 0; margin-bottom: 30px;}
    100% {opacity: 1; margin-bottom: 0;}
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -30px;
    right: 30px;
    background-color: white;
    box-shadow: 3px 3px 4px rgba(0,0,0,.05);
    width: 30px;
    height: 30px;
    -webkit-transform: translateY(-15px) rotate(45deg);
  }
`;

export default Dialogue;
