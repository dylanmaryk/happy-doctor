import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
import { animateScroll as scroll } from 'react-scroll'
import './App.css';
import Wrapper from './wrapper';
import Sidebar from './sidebar';
import Main from './main/main';
import Stats from './stats';
import Logo from './sidebar/logo';
import SidebarContent from './sidebar/content';
import Header from './stats/header';
import StatsContent from './stats/content';
import Conversation from './sidebar/conversation/wrapper';
import Dialogue from './sidebar/conversation/dialogue';
import IllustrationWrapper from './sidebar/conversation/illustration_wrapper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["img/doctor-1.png"],
      income: "The value",
      relationships: "Very good"
    }
    this.mainRef = React.createRef();
  }
  addItem = () => this.setState(
    {
      items: ["img/doctor-1.png", "img/doctor-1.png"], 
      income: "The value 2", 
      relationships: "Very good 2" 
    }
  );
  scrollToBottom() {
    this.mainRef.current.scrollToBottom();
  }
  render() {
    const { items, income, relationships } = this.state;
    return (
      <Wrapper>
        <Sidebar>
          <Logo />
          <SidebarContent>
            <Conversation>
              <Dialogue>
              <button onClick={() => {this.addItem(); this.scrollToBottom()}}>
                Add item
              </button>
              </Dialogue>
              <IllustrationWrapper>
                <img alt="" src="img/doctor-1.png" />
              </IllustrationWrapper>
            </Conversation>
          </SidebarContent>
        </Sidebar>
        <Main ref={this.mainRef}>
          <ItemList items={items} />
        </Main>
        <Stats>
          <Header>
            This is the header
          </Header>
          <StatsContent income={income} relationships={relationships} />
        </Stats>
      </Wrapper>
    );
  }
}

class ItemList extends Component {
  scrollToBottom() {
    scroll.scrollToBottom();
  }
  render() {
    const listItems = this.props.items.map((item, index) =>
      <FadeIn key={index}>
        <img src={item} alt="" />
      </FadeIn>
    );
    return (
      <div>{listItems}</div>
    );
  }
}

export default App;
