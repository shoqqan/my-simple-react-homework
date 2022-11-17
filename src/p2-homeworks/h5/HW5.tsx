import React from 'react'
import {HashRouter, NavLink, Route} from 'react-router-dom'
import Header from './Header'
import Routes, {BrowRoutes, PATH} from './BrowRoutes'
import PreJunior from "./pages/PreJunior";

function HW5() {
    return (

        <HashRouter>

            {/*в gh-pages лучше работает HashRouter*/}

            <Header/>
            <BrowRoutes/>

        </HashRouter>
    )
}

export default HW5
