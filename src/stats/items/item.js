import React, { Component } from 'react';
import Styled from 'styled-components';
import Circle from './circle.js';

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;

  img {
    width: 40px;
    height: auto;
    flex-grow: 0;
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
  flex-grow: 0;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 5px;
`;

const Values = Styled.div`
  font-size: 25px;
  line-height: 33px;
  vertical-align: middle;
  color: #2667A8;
  letter-spacing: 0;
  flex-grow: 1;
`;

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = { animate: false };
  }

  render() {
    const {src, alt, title, children, circles} = this.props;
    const { animate } = this.state;
    return (
      <ItemWrapper animate={animate}>
        <ImageWrapper>
          <img src={src} alt={alt} />
        </ImageWrapper>
        <ContentWrapper>
          <Title>{title}</Title>
          {circles ? 
            <div>
              <Circle isFull={circles >= 1 && true}/>
              <Circle isFull={circles >= 2 && true}/>
              <Circle isFull={circles >= 3 && true}/>
              <Circle isFull={circles >= 4 && true}/>
              <Circle isFull={circles >= 5 && true}/>
              <Circle isFull={circles >= 6 && true}/>
              <Circle isFull={circles >= 7 && true}/>
              <Circle isFull={circles >= 8 && true}/>
            </div>
            : 
          <Values>{children}</Values>
          }
        </ContentWrapper>
      </ItemWrapper>
    );
  }
}


export default Item;
