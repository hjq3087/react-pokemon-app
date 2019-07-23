import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function PokemonList(props) {
    const list = props.list
    const title = props.title
    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {
                    list.map((pokemon) => {
                        return (
                            <li key={pokemon.id}>
                                <Link to={`/pokemons/${pokemon.id}`}>
                                    <button className='btn'>
                                        #{pokemon.id}
                                        <br />
                                        {pokemon.name}
                                    </button>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default PokemonList