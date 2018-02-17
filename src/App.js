
import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom'
import PokemonList from './PokemonList'
import PokemonDetail from './PokemonDetails'
import './App.css'

import axios from 'axios'

// import pokemonList from './pokemons.json'

// console.log(pokemonList)

class App extends Component {

  state = {
    pokemons: []
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://pokeapi.salesstock.net/api/v2',
      headers: {'User-Agents': "cheese"}
    }).then((err, data) => {
      console.log(err)
    })
  }

  render() {
    const { pokemons } = this.state
    return (
      <div className="App">
        {/* Redirect to "/pokemons" from the "/" root URL */}
        <Route exact path="/" render={() => {
          return <Redirect to="/pokemons" />
        }} />

        <div className="section">
          {/* TITLE */}
          <h1 className="title is-1 has-text-centered">Best Pokemons To Collect</h1>
          
          <div className="columns">
            
            {/* Left Column */}
            <div className="column is-4">
              <Route path="/pokemons" render={() => {
                return <PokemonList pokemons={pokemons} />
               }} />
            </div>

            {/* Right Column */}
            <div className="column is-8">
              <Route path="/pokemons/:id" render={(routeProps) => {
                const pokemonId = routeProps.match.params.id
                const pokemon = pokemons.find((p) => {
                  return p._id === pokemonId
                })
                return <PokemonDetail pokemon={pokemon} />
              }} />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
