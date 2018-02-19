import React from 'react'
import { Link } from 'react-router-dom'

class Pokemons extends React.Component {

  // state = {
  //   filterSting: ''
  // }

// updateFilter() {
//     this.setState ({
//       filterString: this.refs.filter.value
//     })
// }

render () {
    // const { filterString } = this.state
    console.log(this.props)

    return (
        <div className="Pokemons">
          {/* <input onChange={this.updateFilter.bind(this)} ref="filterinput" className="input is-large" type="text" placeholder="Filter The List" /> */}
          <ul className="menu-list">
            {this.props.pokemons.map((p,i) => {
              return (
                <li key={p._id}>
                  <Link to={`/pokemons/${p.name}`}>{p.name}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      )
    }
  }
  
  export default Pokemons

