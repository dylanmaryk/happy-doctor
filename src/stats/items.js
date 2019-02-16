import React, { Component } from 'react';
import Wrapper from './items/wrapper';
import Item from './items/item';

class Items extends Component {
  render() {
    return (
      <Wrapper>
        <Item
          src="/img/icon-income.png"
          title={"Your Income"}
          >
          The value
          </Item>
        <Item
          src="/img/icon-relationships.png"
          title="Your Relationships"
          >
          Very good
          </Item>
      </Wrapper>
    );
  }
}

export default Items;
