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
      { id: '', name: 'Todas' },
      { id: 'electro', name: 'Eletrodomestico' },
      { id: 'toy', name: 'Brinquedo' },
      { id: 'eletronic', name: 'Eletronico' },
      { id: 'game', name: 'Games' },
      { id: 'car', name: 'Automotivo' }
    ],
    category: ''
  }

  updateQuery = (query) => {
    this.setState(() => ({ query: query }))
  }

  selectCategory = (category) => {
    this.setState(() => ({ category }))
  }


  render() {

    let { query, categories, category } = this.state;

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
          <Menu categories={categories} selectCategory={this.selectCategory} />
          <Showcase query={query} categorySelected={category} />
        </div>


      </div>
    );
  }
}

export default App;
