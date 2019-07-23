import React, { Component } from 'react'
import Request from '../api/Request.js'
import { Link } from 'react-router-dom'


import '../style/PokemonDetail.css'


class PokemonDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            pokemon: {}
        }
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

    handleClick(e, id) {
        this.fetchPokemonById(id)
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

    componentDidMount() {
        const id = this.props.match.params.id
        console.log(id)

        this.fetchPokemonById(id)
    }

    componentDidUpdate(prevProps) {
        let oldId = prevProps.match.params.id
        let newId = this.props.match.params.id
        // console.log(oldId, newId)
        if (oldId !== newId) {
            this.fetchPokemonById(newId)
        }
    }

    render() {
        const pokemon = this.state.pokemon
        const {
            id,
            name,
            types,
            weaknesses,
            imgSrc,
            evolution,
            story,
            info,
        } = pokemon

        const mapper = this.typeBtnMapper()

        let 
        typesList,
        weaknessesList,
        evolutionList

        if (types) {
            typesList = types.map(type => {
                const btnClass = `btn ${mapper[type]}`
                return (
                <li key={type}>
                    <button className={btnClass}>{type}</button>
                </li>)
            })
        }

        if (weaknesses) {
            weaknessesList = weaknesses.map(type => {
                const btnClass = `btn ${mapper[type]}`
                return (
                <li key={`w-${type}`}>
                    <button className={btnClass}>{type}</button>
                </li>)
            })
        }

        if (evolution && evolution.length) {
            evolutionList = evolution.map((evoLevel, index) => {
                return (
                    <li key={evoLevel.evloutionLevel}>
                        <p>
                            Evo Level {evoLevel.evloutionLevel}
                            {
                                evoLevel.branches.map((branch, index) => {
                                    return (
                                        <Link key={index} to={`/pokemons/${branch.id}`}>
                                            <button 
                                                className='btn' 
                                                // onClick={(e, id) => this.handleClick(e, branch.id)}
                                                >
                                                #{branch.id}
                                                <br />
                                                {branch.name}
                                            </button>
                                        </Link>
                                    )
                                })
                            }
                        </p>
                    </li>
                )
            })
        } else {
            evolutionList = <p>{pokemon.name}没有进化过程</p>
        }

        return (
            <div className="container">
                <h1>#{id} {name}</h1>
                <img src={imgSrc}></img>
                <h2>Types: </h2>
                <ul>
                    {typesList}
                </ul>
                <h2>Weaknesses: </h2>
                <ul>
                    {weaknessesList}
                </ul>
                <h2>Evolution: </h2>
                <ul>
                    {evolutionList}
                </ul>
                <h2>Story: </h2>
                <p>
                    {story}
                </p>
            </div>
        )
    }
}

export default PokemonDetail