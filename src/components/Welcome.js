import React from 'react'
import { Link } from 'react-router-dom'


function Welcome() {

    const randomId = Math.floor(Math.random() * 806 + 1)
    const randomPokemon = `pokemons/${randomId}`

    return (
        <div className="container">
            <h1>Welcome to Allen's Pokemon Pokédex</h1>
            <button className='btn btn-lg'>
                <Link to={randomPokemon}>Pick One</Link>
            </button>
        </div>
    )
}

export default Welcome
