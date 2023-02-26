import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {Paper} from "@mui/material";

import {movieActions} from "../../redux";
import {MovieInfo} from "../../components"


const MovieInfoPage = () => {
    const {movieId} = useParams();
    const dispatch = useDispatch();
    const {selectedMovie} = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(movieActions.movieById({id: movieId}));
    }, [dispatch]);

    return (
        <Paper>
            {selectedMovie && <MovieInfo movie={selectedMovie}/>}
        </Paper>
    )
}

export {MovieInfoPage};