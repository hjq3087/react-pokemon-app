import React from 'react'
import { NavLink } from 'react-router-dom'

import '../style/Menu.css'
import logo from '../imgs/logo.png'

function Menu() {
    let menus = [
        {
            text: 'Welcome',
            url: '/',
        },
        {
            text: 'Find Pokemon',
            url: '/findpokemon',
        },
        {
            text: 'My Team',
            url: '/myteam',
        },
    ]
    return (
        <nav>
            <div>
                <img src={logo} alt='logo'/>
            </div>
            <ul>
                {
                    menus.map((e, index) =>
                        <li key={index}>
                            <NavLink to={e.url} exact activeClassName='active'>{e.text}</NavLink>
                        </li>
                    )
                }
            </ul>            
        </nav>
    )
}

export default Menu
