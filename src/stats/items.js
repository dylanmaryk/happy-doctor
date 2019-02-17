import React from 'react';
import Wrapper from './items/wrapper';
import Item from './items/item';

function Items(props) {
  return (
    <Wrapper>
      <Item
        src="/img/icon-income.png"
        title={"Your Income"}
        >
        {props.income}
        </Item>
      <Item
        src="/img/icon-relationships.png"
        title="Your Relationships"
        >
        {props.relationships}
        </Item>
      <Item
        src="/img/icon-relationships.png"
        title="Your Relationships"
        circles="3"
        >
        {props.relationships}
        </Item>
    </Wrapper>
  );
}

export default Items;
