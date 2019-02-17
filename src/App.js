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
      firstQuestion: true,
      items: [],
      income: "€ 1.000",
      animateIncome: false,
      relationships: "Doing well",
      animateRelationships: false,
      freetime: "10h",
      animateFreetime: false,
      sleep: "5.5h",
      animateSleep: false,
      stress: 6,
      animateStress: false,
      professional: 3,
      animateProfessional: false,
      patients: 5,
      emails: "122",
      animateEmails: false
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
        income: income,
        animateIncome: true
      });
    }, this.timeout);
  }
  setRelationships(relationships) {
    setTimeout(() => {
      this.setState({
        relationships: relationships,
        animateRelationships: true
      });
    }, this.timeout);
  }
  setFreetime(freetime) {
    setTimeout(() => {
      this.setState({
        freetime: freetime,
        animateFreetime: true
      });
    }, this.timeout);
  }
  setSleep(sleep) {
    setTimeout(() => {
      this.setState({
        sleep: sleep,
        animateSleep: true
      });
    }, this.timeout);
  }
  setStress(stress) {
    setTimeout(() => {
      this.setState({
        stress: stress,
        animateStress: true
      });
    }, this.timeout);
  }
  setProfessional(professional) {
    setTimeout(() => {
      this.setState({
        professional: professional,
        animateProfessional: true
      });
    }, this.timeout);
  }
  setEmails(emails) {
    setTimeout(() => {
      this.setState({
        emails: emails,
        animateEmails: true
      });
    }, this.timeout);
  }
  updateQuestion() {
    setTimeout(() => {
      this.setState({
        firstQuestion: false
      });
    }, this.timeout);
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
      items: ["img/feed-10.png"],
      showDialogue: false
    });
    this.addItem("img/feed-11.png");
    this.setStress(5);
    this.setSleep("7.5h");
    this.addItem("img/feed-12.png");
    this.addItem("img/feed-13.png");
    this.addItem("img/feed-14.png");
    this.updateQuestion();
    this.showButtons(true);
  }
  addNextNextItems() {
    this.addItem("img/feed-15.png");
    this.addItem("img/feed-16.png");
    this.addItem("img/feed-17.png");
    this.addItem("img/feed-18.png");
    this.addItem("img/feed-19.png");
    this.addItem("img/feed-20.png");
    this.setSleep("8.5h");
    this.setFreetime("20h");
  }
  componentDidMount() {
    this.addItem("img/feed-0.png");
    this.addItem("img/space.png");
    this.addItem("img/feed-1.png");
    this.addItem("img/feed-2.png");
    this.setIncome("€ 2.000");
    this.setRelationships("Not great");
    this.addItem("img/space.png");
    this.addItem("img/space.png");
    this.addItem("img/feed-3.png");
    this.addItem("img/feed-4.png");
    this.addItem("img/space.png");
    this.addItem("img/feed-5.png");
    this.addItem("img/space.png");
    this.addItem("img/feed-6.png");
    this.setProfessional(2);
    this.setSleep("6.5h");
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
    this.setStress(7);
    this.setEmails(137);
    this.addItem("img/space.png");
    this.addItem("img/space.png");
    this.addItem("img/space.png");
    this.addItem("img/space.png");
    this.addItem("img/feed-10.png");
    this.setRelationships("Poor");
    this.addItem("img/space.png");
    this.showButtons(true);
  }
  render() {
    const { items,
            income,
            animateIncome,
            relationships,
            animateRelationships,
            freetime,
            animateFreetime,
            sleep,
            animateSleep,
            stress,
            animateStress,
            professional,
            animateProfessional,
            patients,
            emails, 
            animateEmails } = this.state;
    return (
      <Wrapper>
        <Sidebar>
          <Logo />
          <SidebarContent>
            <Conversation>
              {
                this.state.showDialogue ?
                <Dialogue>
                  {
                    this.state.firstQuestion ?
                    <Text>
                      Seems like your relationships are suffering a bit, maybe its time to take some less shifts at the hospital?
                    </Text>
                    :
                    <Text>
                      You seem to be ready to make the jump to start your own practice
                    </Text>
                  }
                  <Ctas>
                    <button onClick={() => {}}>
                      No, thanks
                    </button>
                    <button onClick={() => {this.state.firstQuestion ? this.addNextItems() : this.addNextNextItems()}}>
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
                        animateIncome={animateIncome}
                        relationships={relationships}
                        animateRelationships={animateRelationships}
                        freetime={freetime}
                        animateFreetime={animateFreetime}
                        sleep={sleep}
                        animateSleep={animateSleep}
                        stress={stress}
                        animateStress={animateStress}
                        professional={professional}
                        animateProfessional={animateProfessional}
                        patients={patients}
                        emails={emails}
                        animateEmails={animateEmails} />
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
