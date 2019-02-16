import Styled from 'styled-components';

const MainStyledDiv = Styled.div`
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  overflow-Y: scroll;
  width: 700px;
  background: #E9EAED;

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default MainStyledDiv;
