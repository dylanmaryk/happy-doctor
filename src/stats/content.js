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
             animateIncome={props.animateIncome}
             relationships={props.relationships}
             animateRelationships={props.animateRelationships}
             freetime={props.freetime}
             animateFreetime={props.animateFreetime}
             sleep={props.sleep}
             animateSleep={props.animateSleep}
             stress={props.stress}
             animateStress={props.animateStress}
             professional={props.professional}
             animateProfessional={props.animateProfessional}
             patients={props.patients}
             emails={props.emails}
             animateEmails={props.animateEmails} />
    </ContentWrapper>
  );
}

export default Content;
