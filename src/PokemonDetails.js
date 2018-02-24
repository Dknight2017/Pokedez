import React from 'react'

class Pokemon extends React.Component {
  // inside of compoentn did mount make an axios call to get detais about the pokemon
   // for example https://pokeapi.co/api/v2/pokemon/3/ inside of component did mount
   // once res comes back set pokemon detail in the state of this component
  render() {
    const { pokemon, index } = this.props
    console.log(pokemon)
    return (
      <div className= "Pokemon content">
        <div className="columns">
          <div className="column">
            <img alt={pokemon && pokemon.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`} />
          </div>
          <div className="column">
            <h1 className="name is-2">{pokemon && pokemon.name}</h1>
            <ul>
              <li>Name: {pokemon.name}</li>
              <li>Height {pokemon.height}</li>
              <li>Weight: {pokemon.weight}</li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}

export default Pokemon