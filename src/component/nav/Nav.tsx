import React from "react";
import {NavLink} from "react-router-dom";
import s from './Nav.module.css'

type NavigationPropsType = {}
const NavigationArray = [
    {id: 1, name: 'Main', route:'/welcome'},
    {id: 2, name: 'Skills', route:'/skills'},
    {id: 3, name: 'My projects', route:'/my_projects'},
    {id: 4, name: 'Contacts', route:'/contacts'}
]
export const Navigation = (props: NavigationPropsType) => {
    const MapNavigate = NavigationArray
        .map(el => <span key={el.id}>
            <NavLink className={s.navlink} to={el.route}>{el.name}</NavLink>
        </span>
        )
    return (
        <nav className={s.nav}>
            {MapNavigate}
        </nav>
    )
}
