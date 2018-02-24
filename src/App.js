
import React, { Component } from 'react'; // Importing React Folder from Node Modules 
import { Redirect, Route } from 'react-router-dom' // Importing a function called Redirect and Route from the node moudule - react-router-dom
import PokemonList from './PokemonList' // Importing Pokemon class from React component 
import PokemonDetail from './PokemonDetails' // Importing Pokemon details to create Pokemon component
import './App.css'

import axios from 'axios' // Importing axios from Node Modules


class App extends Component {  // Creating app component 

  state = {         // Setting the state on the App component 
    pokemons: []    // Creating the pokemon state with an empty array
  }

  componentDidMount() {             // Mounts component ready for use ajax calls
    console.log(PokemonList)        // Console logging Pokemon List
    console.log(Route, typeof Route) // Console logging type of route 
    axios({
      method: 'get',                // Axios sending a get request 
      url: 'https://pokeapi.co/api/v2/pokemon'  // Axios get request to recieve and API
    }).then((res) => {                    // Responding to the request 
      this.setState({                       // Setting the state
        pokemons : res.data.results       // Retrieving the pokemons data
      })
    })
  }

  render() {                          // Call the render method 
    const { pokemons } = this.state   // Setting the state to pokemons data
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
              <Route path="/pokemons/:id" render={(routeProps) => {
                const pokemonId = routeProps.match.params.id
                const pokemon = pokemons[pokemonId]
                
                return <PokemonDetail pokemon={pokemon} index={Number(pokemonId) + 1}/>
              }} />
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
