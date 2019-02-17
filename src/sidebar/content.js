import React from 'react';
import Styled from 'styled-components';

const ContentWrapper= Styled.div `
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  flex-grow: 1;
  width: 100%;
  padding: 0px 15px;
`

const Content = ({ children }) => (
  <ContentWrapper>
    {children}
  </ContentWrapper>
);

export default Content;
