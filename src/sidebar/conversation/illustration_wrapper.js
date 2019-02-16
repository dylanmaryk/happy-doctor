import Styled from 'styled-components';

const IllustrationWrapper= Styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 0;
  justify-content: flex-end;
  text-align: center;
  padding-top: 40px;

  img {
    max-width: 150px;
    height: auto;
    display: inline-block;
  }
`;

export default IllustrationWrapper;
