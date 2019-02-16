import React, { Component } from 'react';
import MainStyledDiv from './main_styled_div';

class Main extends Component {
  render() {
    return (
      <MainStyledDiv debounce={500}>
        {this.props.children}
      </MainStyledDiv>
    );
  }
}

export default Main;
