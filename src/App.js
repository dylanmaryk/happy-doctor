import React, { Component } from 'react';
import FadeIn from 'react-fade-in';
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
  timeout = 0;
  constructor(props) {
    super(props);
    this.state = {
      showDialogue: false,
      items: [],
      income: "€ 15.000",
      relationships: "Doing well",
      freetime: "57h",
      sleep: "6.5h",
      emails: "22"
    }
  }
  addItem(item, resetTimeout) {
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(item)
      });
      if (resetTimeout) {
        this.timeout = 0;
      }
    }, this.timeout);
    this.timeout += 2000;
  }
  showButtons(resetTimeout) {
    setTimeout(() => {
      this.setState({
        showDialogue: true
      });
      if (resetTimeout) {
        this.timeout = 0;
      }
    }, this.timeout);
    this.timeout += 2000;
  }
  addNextItems() {

  }
  componentDidMount() {
    this.addItem("img/feed-0.jpg");
    this.addItem("img/feed-1.jpg");
    this.showButtons(true);
  }
  render() {
    const { items, income, relationships, freetime, sleep, emails } = this.state;
    return (
      <Wrapper>
        <Sidebar>
          <Logo />
          <SidebarContent>
            <Conversation>
              {
                this.state.showDialogue ?
                  <Dialogue>
                    <button onClick={() => {this.addNextItems()}}>
                      Yes
                    </button>
                    <button onClick={() => {}}>
                      No
                    </button>
                  </Dialogue>
                :
                  null
              }
              <IllustrationWrapper>
                <img alt="" src="img/doctor-1.png" />
              </IllustrationWrapper>
            </Conversation>
          </SidebarContent>
        </Sidebar>
        <Main>
          <ItemList items={items} />
        </Main>
        <Stats>
          <Header>
            Your life quality
          </Header>
          <StatsContent income={income} 
                        relationships={relationships} 
                        freetime={freetime} 
                        sleep={sleep}
                        emails={emails} />
        </Stats>
      </Wrapper>
    );
  }
}

class ItemList extends Component {
  render() {
    const listItems = this.props.items.map((item, index) =>
      <FadeIn key={index} delay={500}>
        <img src={item} alt="" />
      </FadeIn>
    );
    return (
      <div>{listItems}</div>
    );
  }
}

export default App;
