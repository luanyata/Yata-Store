import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Overrider.css';
import Menu from './components/menu/Menu';
import Showcase from './components/showcase/Showcase'

class App extends Component {

  state = {
    query: '',
    categories: [
      { id: 1, name: 'Eletrodomestico' },
      { id: 2, name: 'Brinquedo' },
      { id: 3, name: 'Eletronico' },
      { id: 4, name: 'Games' },
      { id: 5, name: 'Automotivo' }
    ]
  }

  updateQuery = (query) => {
    this.setState(() => ({ query: query }))
  }


  render() {

    let { query, categories } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Yata Store
          </p>
          <div className="search-product">
            <input type="text" placeholder="Pesquise seu produto"
              value={query} onChange={(event) => this.updateQuery(event.target.value)} />
          </div>
        </header>

        <div id='context'>
          <Menu categories={categories} />
          <Showcase query={query} />
        </div>


      </div>
    );
  }
}

export default App;
