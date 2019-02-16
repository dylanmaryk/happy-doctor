import React, { Component } from 'react';
import Wrapper from './conversation/wrapper';
import Dialogue from './conversation/dialogue';
import IllustrationWrapper from './conversation/illustration_wrapper';

class Conversation extends Component {
  render() {
    return (
      <Wrapper>
        <Dialogue>
          Here goes the dialogue
        </Dialogue>
        <IllustrationWrapper>
          <img alt="" src="/img/doctor-1.png" />
        </IllustrationWrapper>
      </Wrapper>
    );
  }
}

export default Conversation;
