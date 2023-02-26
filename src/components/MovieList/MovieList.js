import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {Grid, Pagination} from "@mui/material";

import {MovieCard} from "../MovieCard/MovieCard";
import {movieActions} from "../../redux";


const MovieList = ({movies, totalPages, name}) => {
    const dispatch = useDispatch();

    const handleChange = (e, p) => {
        dispatch(movieActions.setCurrentPage({p, name}))
    }

    useEffect(() => {
        window.scrollTo({top: 0});
    }, [movies])

    return (
        <div>
            <Grid container spacing={5} sx={{margin: '0'}}>
                {movies && movies.map(movie => (<Grid item xs={3} key={movie.id}>
                    <MovieCard key={movie.id} movie={movie}/>
                </Grid>))}
            </Grid>
            {totalPages && <Pagination count={totalPages} color={'primary'} onChange={handleChange}
                                       sx={{display: 'flex', justifyContent: 'center', margin: '50px 0'}}/>}
        </div>
    )
}

export {MovieList};