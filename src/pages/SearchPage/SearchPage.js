import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {Container} from "@mui/material";

import {MovieList} from "../../components";
import {movieActions} from "../../redux";


const SearchPage = () => {
    const {searchMovies: {movies, currentPage, totalPages}} = useSelector(state => state.movies);
    const {state} = useLocation();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.search({keyword: state, currentPage}));
    }, [currentPage])

    return (
        <Container>
            {movies.length !== 0 ? <MovieList movies={movies} totalPages={totalPages} name={`searchMovies`}/> :
                <h6>Nothing was found!</h6>}
        </Container>
    )
}

export {SearchPage};