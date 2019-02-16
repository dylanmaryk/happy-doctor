import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <ItemList />
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
