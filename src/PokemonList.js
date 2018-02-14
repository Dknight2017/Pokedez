import React from 'react'
import { Link } from 'react-router-dom'

class Pokemons extends React.Component {

  state = {
    filterSting: ''
  }

updateFilter() {
    this.setState ({
      filterString: this.refs.filter.value
    })
}

render () {
    const { filterString } = this.state
    const pokemons = this.props.pokemons.filter((p) => {
        return p.title.toUpperCase().includes(filterString.toUpperCase())
    })

    return (
        <div className="Pokemons">
          <input onChange={this.updateFilter.bind(this)} ref="filterinput" className="input is-large" type="text" placeholder="Filter The List" />
          <ul className="menu-list">
            {books.map((p) => {
              return (
                <li key={p._id}>
                  <Link to={`/pokemons/${p._id}`}>{p.title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
  }
  
  export default Pokemons 

