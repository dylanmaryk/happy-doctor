import React, { Component } from 'react';
import './App.css';
import Wrapper from './wrapper';
import Sidebar from './sidebar';
import Main from './main';
import Stats from './stats';
import Logo from './sidebar/logo';
import Content from './sidebar/content';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Sidebar>
          <Logo />
          <Content />
        </Sidebar>
        <Main>
          <ItemList />
        </Main>
        <Stats>
          Stats here
        </Stats>
      </Wrapper>
    );
  }
}

function ItemList() {
  const items = ["img/start.jpg"];
  const listItems = items.map((item, index) =>
    <li key={index}>
      <img src={item} alt="" />
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

export default App;
