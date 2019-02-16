import Styled from 'styled-components';

const Dialogue= Styled.div `
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  width: 90%;
  margin: 0 auto;
  background: #FFFFFF;
  box-shadow: 0 5px 18px 0 rgba(104,104,104,0.15);
  border-radius: 6px 6px 6px 0 0 0 6px;
  position: relative;

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
