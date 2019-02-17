import Styled from 'styled-components';

const Ctas= Styled.div `
  flex-grow: 1;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  font-size: 20px;

  img {
    max-width: 90%;
    height: auto;
    flex: 0;
  }
`;

export default Ctas;
