import React from 'react'
import {
    Switch,
    Redirect,
    Route
} from "react-router-dom";

import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/hero/HeroScreen';

import { Navbar } from "../components/ui/Navbar";
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/search/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/search" component={ SearchScreen }></Route>
                    <Route exact path="/marvel" component={ MarvelScreen }></Route>
                    <Route exact path="/dc" component={ DcScreen }></Route>
                    <Route exact path="/hero/:heroId" component={ HeroScreen }></Route>
                    <Redirect to="/marvel"/>
                </Switch>
            </div>
        </>
    )
}
