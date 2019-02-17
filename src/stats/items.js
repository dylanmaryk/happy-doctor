import React from 'react';
import Wrapper from './items/wrapper';
import Item from './items/item';

function Items(props) {
  return (
    <Wrapper>
      <Item
        src="/img/icon-income.png"
        title="Income"
        >
        {props.income}
        </Item>
      <Item
        src="/img/icon-relationships.png"
        title="Relationships"
        >
        {props.relationships}
        </Item>
      <Item
        src="/img/icon-freetime.png"
        title="Free time per week"
        >
        {props.freetime}
        </Item>
      <Item
        src="/img/icon-sleep.png"
        title="Average sleep per day"
        circles="4"
        >
        {props.sleep}
        </Item>
      <Item
        src="/img/icon-emails.png"
        title="Emails to answer"
        >
        {props.emails}
        </Item>
    </Wrapper>
  );
}

export default Items;
