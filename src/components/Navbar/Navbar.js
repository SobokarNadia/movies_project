import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {Chip, Stack} from "@mui/material";

import {movieActions} from "../../redux";

const Navbar = () => {
    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.movies);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(movieActions.getGenres());
    }, [dispatch])

    return (
        <Stack direction="row" spacing={2} sx={{margin: '15px', flexWrap: 'wrap'}}>
            {genres.map(({id, name}) => <Chip key={id} label={name} variant="outlined"
                                              onClick={() => navigate(`/genre/${id}`)}/>)}
        </Stack>
    )
}

export {Navbar};