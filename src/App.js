import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layout";
import {HomePage} from "./pages";
import {MovieInfo, MovieList} from "./components";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'home'}/>}/>
                    <Route path={'home'} element={<HomePage/>}/>
                    <Route path={'films'} element={<MovieList/>}>
                        <Route path={':filmId'} element={<MovieInfo/>}/>
                    </Route>

                </Route>
            </Routes>
        </div>
    )
}

export {App};