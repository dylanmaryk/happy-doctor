import Styled from 'styled-components';

const Ctas= Styled.div `
  flex-grow: 0;
  align-self: center;
  justify-self: flex-end;
  z-index: 9000;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;

  button {
    appearance: none;
    border: 1px solid blue;
    padding: 10px;
    flex: 1;
    margin: 15px;
    font-size: 24px;
    border-radius: 40px;
    background: #FFFFFF;
    border: 1px solid #DBDBDB;
    color: #1678ED;
    font-weight: 600;

    &:hover,
    &:focus {
      opacity: .65;
      cursor: pointer;
      border: 1px solid #7DB1EE;
      box-shadow: 0 2px 24px 0 rgba(22,120,237,0.1);
    }

    &:first-child {
      margin-right: 7px;
    }

    &:last-child {
      margin-left: 7px;
    }
  }
`;

export default Ctas;
