import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Container} from "@mui/material";

import {movieActions} from "../../redux";
import {MovieList} from "../../components";


const MoviesPage = () => {
    let dispatch = useDispatch();
    const {allMovies: {movies, currentPage, totalPages}} = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(movieActions.getMovies({currentPage}));
    }, [currentPage, dispatch])

    return (
        <Container>
            <MovieList movies={movies} totalPages={totalPages} name={'allMovies'}/>
        </Container>
    )
}

export {MoviesPage};