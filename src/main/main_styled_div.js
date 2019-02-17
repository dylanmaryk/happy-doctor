import Styled from 'styled-components';
import ScrollToBottom from 'react-scroll-to-bottom';

const MainStyledDiv = Styled(ScrollToBottom)`
  flex-grow: 0;
  overflow-Y: scroll;
  width: 700px;
  background: #E9EAED;
  padding: 10px;
  text-align: center;

  img {
    max-width: 600px;
    height: auto;
    display: inline-block;
  }
`;

export default MainStyledDiv;
