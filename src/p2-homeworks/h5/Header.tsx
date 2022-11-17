import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./BrowRoutes";
import s from "./Header.module.css"
function Header() {
    return (
        <div className={s.links}>
            <NavLink activeClassName={s.active} to={PATH.PRE_JUNIOR}>preJunior</NavLink>
            <NavLink to={PATH.JUNIOR} activeClassName={s.active}>junior</NavLink>
            <NavLink to={PATH.JUNIOR_PLUS} activeClassName={s.active}>juniorPlus</NavLink>
            <div className={s.hoverButton}></div>

        </div>
    )
}

export default Header
