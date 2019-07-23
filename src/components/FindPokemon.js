import React, { Component } from 'react'
import Request from '../api/Request.js'

import PokemonList from './PokemonList'
import '../style/PokemonDetail.css'

class FindPokemon extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            showAll: false,
            allPokemons: [],
            typesToSearch: [],
            keyWord: '',
            resultList: [],
        }
        this.getAll = this.getAll.bind(this)
        this.getTypes = this.getTypes.bind(this)
    }
    

    fetchPokemonById(id) {
        const r = new Request()
        r.get(id, (data) => {
            const pokemon = data[0]
            this.setState({
                id,
                pokemon
            })
        })
    }

    
    fetchAllPokemon() {
        const r = new Request()
        r.get('all', (data) => {
            const allPokemons = data
            this.setState({
                allPokemons
            })
        })
    }

    typeBtnMapper() {
        return {
            "虫": "bug-btn",
            "龙": "dragon-btn",
            "妖精": "fairy-btn",
            "火": "fire-btn",
            "幽灵": "ghost-btn",
            "地面": "ground-btn",
            "一般": "normal-btn",
            "超能力": "psychic-btn",
            "钢": "steel-btn",
            "恶": "dark-btn",
            "电": "eletric-btn",
            "格斗": "fighting-btn",
            "飞行": "flying-btn",
            "草": "grass-btn",
            "冰": "ice-btn",
            "毒": "poison-btn",
            "岩石": "rock-btn",
            "水": "water-btn",
        }
    }

    getAll() {
        this.setState(state => {
            return {
                showAll: !state.showAll
            }
        })
    }

    getTypes(event, type) {
        console.log(event.target)
        console.log(type)
    }

    componentDidMount() {
        this.fetchAllPokemon()
    }

    render() {
        let allPokemonsList
        let typeBtnMapper = this.typeBtnMapper()

        if (this.state.showAll === true) {
            allPokemonsList = <PokemonList list={this.state.allPokemons} title='All the Pokemons'></PokemonList>
        }

        const typesBtnList = Object.entries(typeBtnMapper).map((e, index) => {
            const btnClass= e[1]
            const type = e[0]
            return (
                <li key={index}>
                    <button 
                    className={`btn ${btnClass}`}
                    onClick={(event, t) => this.getTypes(event, type)}
                    >
                        {type}
                    </button>
                </li>
            )
        })

        return (
            <div className="container">
                <h1>FindThePokemon</h1>
                <button className='btn' onClick={this.getAll}>All</button>
                {allPokemonsList}
                <h1>Search by types: </h1>
                <ul>
                    {typesBtnList}
                </ul>
            </div>
        )
    }
}

export default FindPokemon