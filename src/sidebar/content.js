import React from 'react';
import Styled from 'styled-components';
import Conversation from './conversation';

const ContentWrapper= Styled.div `
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  flex-grow: 1;
  width: 100%;
  padding: 0px 15px;
`;

const Content = () => (
  <ContentWrapper>
    <Conversation />
  </ContentWrapper>
);

export default Content;
