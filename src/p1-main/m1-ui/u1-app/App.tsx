import React from 'react'
import s from './App.module.css'
import HW1 from '../../../p2-homeworks/h1/HW1'
import HW2 from "../../../p2-homeworks/h2/HW2";
import HW3 from "../../../p2-homeworks/h3/HW3";
import HW4 from "../../../p2-homeworks/h4/HW4";
import HW5 from "../../../p2-homeworks/h5/HW5";
import {HashRouter, NavLink} from "react-router-dom";
import {PATH} from "../../../p2-homeworks/h5/BrowRoutes";
import Header from "../../../p2-homeworks/h5/Header";

function App() {
    return (
        <HashRouter>
            <div className={s.App}>

                <div>react homeworks:
                    {/*<Header/>*/}
                    {/*<NavLink to={PATH.PRE_JUNIOR}><NavLink/>*/}
                    {/*<NavLink title={'junior'} to={PATH.JUNIOR}/>*/}
                    {/*<NavLink title={'juniorPlus'} to={PATH.JUNIOR_PLUS}/>*/}
                </div>
                {/*<HW1/>*/}
                {/*<HW2/>*/}
                {/*<HW3/>*/}
                {/*<HW4/>*/}
                <HW5/>

            </div>
        </HashRouter>
    )
}

export default App
