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
          animate={this.props.animateRelationships}
          >
          {this.props.relationships}
          </Item>
        <Item
          src="/img/icon-freetime.png"
          title="Free time per week"
          animate={this.props.animateFreetime}
          >
          {this.props.freetime}
          </Item>
        <Item
          src="/img/icon-sleep.png"
          title="Average sleep per day"
          animate={this.props.animateSleep}
          >
          {this.props.sleep}
          </Item>
        <Item
          src="/img/icon-stress.png"
          title="Stress level"
          animate={this.props.animateStress}
          circles={this.props.stress}
          >
          </Item>
        <Item
          src="/img/icon-professional.png"
          title="Professional satisfaction"
          animate={this.props.animateProfessional}
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
          animate={this.props.animateEmails}
          >
          {this.props.emails}
          </Item>
      </Wrapper>
    );
  }
}

export default Items;
