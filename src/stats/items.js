import React, { Component } from 'react';
import Wrapper from './items/wrapper';
import Item from './items/item';

class Items extends Component {
  render() {
    return (
      <Wrapper>
        <Item
          src="/img/icon-income.png"
          title="Income"
          animate={this.props.animateIncome}
          >
          {this.props.income}
          </Item>
        <Item
          src="/img/icon-relationships.png"
          title="Relationships"
          >
          {this.props.relationships}
          </Item>
        <Item
          src="/img/icon-freetime.png"
          title="Free time per week"
          >
          {this.props.freetime}
          </Item>
        <Item
          src="/img/icon-sleep.png"
          title="Average sleep per day"
          >
          {this.props.sleep}
          </Item>
        <Item
          src="/img/icon-stress.png"
          title="Stress level"
          circles={this.props.stress}
          >
          </Item>
        <Item
          src="/img/icon-professional.png"
          title="Professional satisfaction"
          circles={this.props.professional}
          >
          </Item>
        <Item
          src="/img/icon-patients.png"
          title="Patient satisfaction"
          circles={this.props.patients}
          >
          </Item>
        <Item
          src="/img/icon-emails.png"
          title="Emails to answer"
          >
          {this.props.emails}
          </Item>
      </Wrapper>
    );
  }
}

export default Items;
