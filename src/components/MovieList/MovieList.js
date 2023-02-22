import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";
import {MovieCard} from "../MovieCard/MovieCard";
const MovieList = () => {
    let dispatch = useDispatch();
    const {movies, currentPage} = useSelector(state => state.movies);
    console.log('movies', movies)
    useEffect(() => {
        dispatch(movieActions.getMovies(currentPage));
        dispatch(movieActions.getGenres())
    }, [currentPage])

    return (
        <div>
            MovieList
            {movies && movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    )
}

export {MovieList};