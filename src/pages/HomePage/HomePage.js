import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Container, Grid, Typography} from "@mui/material";

import {MovieCard} from "../../components";
import {movieActions} from "../../redux";


const HomePage = () => {
    const {topRatedMovies: {movies}} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getTopRated());
    }, [dispatch])

    return (
        <Container>
            <Typography variant={'h4'} sx={{margin: '20px 0'}}>TOP-5:</Typography>
            <Grid container justifyContent="center" spacing={1} sx={{flexWrap: 'nowrap'}}>
                {movies.filter((movie, i) => i < 5).map(movie => <Grid item key={movie.id}><MovieCard movie={movie}/></Grid>)}
            </Grid>
        </Container>
    )
}

export {HomePage};