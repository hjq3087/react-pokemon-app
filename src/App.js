import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css'

import Welcome from "./components/Welcome"
import FindPokemon from "./components/FindPokemon"
import PokemonDetail from "./components/PokemonDetail"
import Menu from '../src/components/Menu'

function App() {
  return (
        <Router>
            <React.Fragment>
                <Menu />
                <Route exact path="/" component={Welcome} />
                <Route exact path="/findpokemon" component={FindPokemon} />
                <Route path="/pokemons/:id" component={PokemonDetail} />
            </React.Fragment>
        </Router>
    )
}

export default App
