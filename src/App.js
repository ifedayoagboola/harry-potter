import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component.jsx';
import { SearchBox } from './components/search-box/search-box.component.jsx';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      Heroes: [],
      searchField: ''
    };
  }
  componentDidMount() {
    fetch('https://hp-api.herokuapp.com/api/characters')
      .then(response => response.json())
      .then(name => this.setState({ Heroes: name }))
  }
  render() {
    const { Heroes, searchField } = this.state;
    const filteredHeroes = Heroes.filter(hero => hero.actor.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>HARRY POTTER</h1>
        <SearchBox placeholder='search Hero' handleChange={(e) => this.setState({ searchField: e.target.value })} />
        <CardList Heroes={filteredHeroes} />

      </div>
    );
  }
}


export default App;
