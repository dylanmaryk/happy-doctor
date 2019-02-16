import React, { Component } from 'react';
import './App.css';
import Wrapper from './wrapper';
import Sidebar from './sidebar';
import Main from './main';
import Stats from './stats';
import Logo from './sidebar/logo';
import SidebarContent from './sidebar/content';
import Header from './stats/header';
import StatsContent from './stats/content';
import Conversation from './sidebar/conversation/wrapper';
import Dialogue from './sidebar/conversation/dialogue';
import IllustrationWrapper from './sidebar/conversation/illustration_wrapper';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Sidebar>
          <Logo />
          <SidebarContent>
            <Conversation>
              <Dialogue>
                Put the dialogue here
              </Dialogue>
              <IllustrationWrapper>
                <img alt="" src="/img/doctor-1.png" />
              </IllustrationWrapper>
            </Conversation>
          </SidebarContent>
        </Sidebar>
        <Main>
          <ItemList />
        </Main>
        <Stats>
          <Header>
            This is the header
          </Header>
          <StatsContent />
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
