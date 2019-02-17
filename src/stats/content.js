import React from 'react';
import Styled from 'styled-components';
import Items from './items';

const ContentWrapper = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  flex-grow: 1;
  width: 100%;
`;

function Content(props) {
  return (
    <ContentWrapper>
      <Items income={props.income} 
             relationships={props.relationships} 
             freetime={props.freetime} 
             sleep={props.sleep}
             stress={props.stress}
             professional={props.professional}
             patients={props.patients}
             emails={props.emails} />
    </ContentWrapper>
  );
}

export default Content;
