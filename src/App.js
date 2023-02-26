import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import {createTheme, ThemeProvider} from "@mui/material";

import {MainLayout} from "./layout";
import {GenrePage, HomePage, MovieInfoPage, MoviesPage, SearchPage} from "./pages";

const App = () => {
    const {mode} = useSelector(state => state.movies);

    const theme = createTheme({
        palette: {
            mode,
            ...(mode === 'light'
                    ? {
                        palette: {
                            primary: {
                                main: '#3f50b5'
                            }
                        }
                    }
                    : {
                        primary: {
                            main: '#313335'
                        }
                    }
            )
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'home'}/>}/>
                    <Route path={'home'} element={<HomePage/>}/>
                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={':movieId'} element={<MovieInfoPage/>}/>
                    <Route path={'search'} element={<SearchPage/>}/>
                    <Route path={'genre'}>
                        <Route path={':genreId'} element={<GenrePage/>}/>
                    </Route>
                </Route>
            </Routes>
        </ThemeProvider>
    )
}

export {App};