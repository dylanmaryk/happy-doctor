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
import Ctas from './sidebar/conversation/dialogue/ctas';
import Text from './sidebar/conversation/dialogue/text';
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
  addItem(item) {
    setTimeout(() => {
      this.setState({
        items: this.state.items.concat(item)
      });
    }, this.timeout);
    this.timeout += 500;
  }
  setIncome(income) {
    setTimeout(() => {
      this.setState({
        income: income
      });
    }, this.timeout);
    this.timeout += 500;
  }
  setRelationships(relationships) {
    setTimeout(() => {
      this.setState({
        relationships: relationships
      });
    }, this.timeout);
    this.timeout += 500;
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
    this.timeout += 1000;
  }
  addNextItems() {
    this.setState({
      items: ["img/feed-10.png"]
    });
    this.addItem("img/feed-11.png");
    this.addItem("img/feed-12.png");
    this.addItem("img/feed-13.png");
    this.addItem("img/feed-14.png");
  }
  componentDidMount() {
    this.addItem("img/feed-0.png");
    this.addItem("img/space.png");
    this.addItem("img/feed-1.png");
    this.addItem("img/feed-2.png");
    this.setIncome("€ 16.000")
    this.setRelationships("Not great")
    this.addItem("img/space.png");
    this.addItem("img/space.png");
    this.addItem("img/feed-3.png");
    this.addItem("img/feed-4.png");
    this.addItem("img/space.png");
    this.addItem("img/feed-5.png");
    this.addItem("img/space.png");
    this.addItem("img/feed-6.png");
    this.addItem("img/space.png");
    this.addItem("img/space.png");
    this.addItem("img/space.png");
    this.addItem("img/feed-7.png");
    this.addItem("img/space.png");
    this.addItem("img/space.png");
    this.addItem("img/space.png");
    this.addItem("img/feed-8.png");
    this.addItem("img/space.png");
    this.addItem("img/space.png");
    this.addItem("img/feed-9.png");
    this.addItem("img/space.png");
    this.addItem("img/space.png");
    this.addItem("img/space.png");
    this.addItem("img/space.png");
    this.addItem("img/feed-10.png");
    this.addItem("img/space.png");
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
                  <Text>
                    Seems like your relationships are suffering a bit, maybe its time to take some less shifts at the hospital?
                  </Text>
                  <Ctas>
                    <button onClick={() => {}}>
                      No, thanks
                    </button>
                    <button onClick={() => {this.addNextItems()}}>
                      Yes
                    </button>
                  </Ctas>
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
