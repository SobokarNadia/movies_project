import React from 'react';
import {useNavigate} from "react-router-dom";
import {Card, CardContent, CardMedia, Typography} from "@mui/material";

import {poster} from "../../configs";
import {StarsRating} from "../StarsRating/StarsRating";


const MovieCard = ({movie}) => {
    const {id, title, vote_average, release_date, poster_path} = movie;
    const navigate = useNavigate();

    return (
        <Card onClick={() => navigate(`/${id.toString()}`)}
              sx={{cursor: 'pointer', width: '250px', minHeight: '350px'}}
        >
            <CardMedia
                sx={{height: 300}}
                title={title}
                image={poster_path !== null ? `${poster}${poster_path}` : 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'}
            />
            <CardContent>
                <Typography gutterBottom component="div" sx={{fontSize: '16px'}}>
                    {title}
                </Typography>
                <Typography gutterBottom component="div" sx={{fontSize: '12px'}}>
                    {release_date.substring(0, 4)}
                </Typography>
                <StarsRating vote_average={vote_average}/>
            </CardContent>
        </Card>
    )
}

export {MovieCard};