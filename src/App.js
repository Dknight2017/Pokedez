
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
      url: 'https://pokeapi.co/api/v2/pokemon'
    }).then(( res) => {
      this.setState({
        pokemons : res.data.results
      })
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
            <div className='left'>
            <input type="text" placeholder="Choose a pokemon.."/>            
            <div className="column is-4">
                <Route path="/pokemons" render={() => {
                  return <PokemonList pokemons={pokemons} />
                }} />
              </div>
            </div>

            {/* Right Column */}
            <div className="column is-8">
              <Route path="/pokemons/:name" render={(routeProps) => {
                const pokemonName = routeProps.match.params.name
                const pokemon = pokemons.find((p) => {
                  return p.name === pokemonName
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
