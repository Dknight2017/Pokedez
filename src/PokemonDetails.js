import React from 'react'
import axios from 'axios'

class Pokemon extends React.Component {
  // inside of compoentn did mount make an axios call to get detais about the pokemon
   // for example https://pokeapi.co/api/v2/pokemon/3/ inside of component did mount
   // once res comes back set pokemon detail in the state of this component one property should be pokemon details from lines 21 


  state = {
    pokemon: []
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    axios({
      method: 'get',               
      url: `https://pokeapi.co/api/v2/pokemon/${nextProps.index}/`  
    }).then((res) => {            
      console.log(res.data)         
      this.setState({                       
        pokemon : res.data
      })
    })
  }



   render() {
    const { pokemon } = this.state
    // console.log(pokemon)
    return (
      <div className= "Pokemon content">
        <div className="columns">
          <div className="column">
          </div>
          <div className="column">
            <h1 className="name is-2">{pokemon.name}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}/>
            <ul>
              <li>Name: {pokemon.name}</li>
              <li>Height {pokemon.height}</li>
              <li>Weight: {pokemon.weight}</li>
              <li> Base-Experience: {pokemon.base_experience}</li>
            </ul>
          </div>
        </div>

      </div>
 
    )
  }
}

export default Pokemon