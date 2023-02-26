import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Container} from "@mui/material";

import {movieActions} from "../../redux";
import {MovieList} from "../../components";


const GenrePage = () => {
    const {genreId} = useParams();
    const dispatch = useDispatch();
    const {genreMovies: {movies, currentPage, totalPages}} = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(movieActions.moviesByGenres({currentPage, ids: genreId}))
    }, [genreId, currentPage, dispatch]);

    return (
        <Container>
            <MovieList movies={movies} totalPages={totalPages} name={'genreMovies'}/>
        </Container>
    )
}

export {GenrePage};