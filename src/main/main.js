import React, { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll'
import MainStyledDiv from './main_styled_div';

class Main extends Component {
  scrollToBottom() {
    scroll.scrollToBottom();
  }
  render() {
    return (
      <MainStyledDiv>
        {this.props.children}
      </MainStyledDiv>
    );
  }
}

export default Main;
