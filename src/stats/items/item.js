import React from 'react';
import Styled from 'styled-components';

const ItemWrapper = Styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #CFCFCF;
  padding: 15px 0;
`;

const ImageWrapper = Styled.div`
  flex-grow: 0;
  width: 50px;
  position: relative;

  img {
    width: 100%
    height: auto;
    margin: 0 auto;
  }
`;

const ContentWrapper = Styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 10px;
`;

const Title = Styled.div`
  font-size: 14px;
  color: #1B1B1B;
  letter-spacing: 0.2px;
  line-height: 29px;
  flex-grow: 0;
  font-weight: bold;
  text-transform: uppercase;
`;

const Values = Styled.div`
  font-size: 33px;
  color: #2667A8;
  letter-spacing: 0;
  line-height: 29px;
  flex-grow: 1;
`;

const Item = ({src, alt, title, children}) => (
  <ItemWrapper>
    <ImageWrapper>
      <img src={src} alt={alt} />
    </ImageWrapper>
    <ContentWrapper>
      <Title>{title}</Title>
      <Values>{children}</Values>
    </ContentWrapper>
  </ItemWrapper>
);

export default Item;
