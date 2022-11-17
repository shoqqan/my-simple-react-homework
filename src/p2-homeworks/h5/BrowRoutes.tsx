import React from 'react'
import {HashRouter, Route, Router, Switch} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import {JuniorPlus} from "./pages/JuniorPlus";
import {Junior} from "./pages/Junior";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior_plus',
    // add paths
}

export function BrowRoutes() {
    return (
        <Switch>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
                {/*<Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>*/}
                {/*<Route path={PATH.JUNIOR} element={<Junior/>}/>*/}
                {/*<Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>*/}
                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                <Route path={PATH.JUNIOR} render={() => <Junior/>}/>
                <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                <Route path={'/'} render={() => <PreJunior/>}/>
                {/*// add routes*/}

                {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'*'} render={()=> <Error404/>}/>
        </Switch>
    )
}

export default BrowRoutes
