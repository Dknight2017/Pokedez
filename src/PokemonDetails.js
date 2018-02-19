import React from 'react'

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props
    return (
      <div className="Pokemon content">
        <div className="columns">
          <div className="column">
            <img alt={pokemon.name} src={"/" + pokemon.imageLink} />
          </div>
          <div className="column">
            <h1 className="name is-2">{pokemon.name}</h1>
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