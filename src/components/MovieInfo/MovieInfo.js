import React from 'react';
import {useNavigate} from "react-router-dom";
import {Card, CardMedia, Chip, Stack, Typography} from "@mui/material";


import {poster} from "../../configs";
import {StarsRating} from "../StarsRating/StarsRating";

const MovieInfo = ({movie}) => {
    const {
        poster_path,
        genres,
        title,
        vote_average,
        overview,
        production_countries,
        adult,
        release_date,
        spoken_languages
    } = movie;

    const navigate = useNavigate();

    return (
        <Card sx={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            padding: '30px',
            alignItems: 'center',
            gap: '15px',
            margin: '15px'
        }}>
            <CardMedia
                image={poster_path !== null ? `${poster}${poster_path}` : 'https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg'}
                sx={{height: '400px', width: '300px'}}/>

            <Typography variant={'h4'}>{title}</Typography>

            <StarsRating vote_average={vote_average}/>

            <Typography variant={'body2'}><strong>Age: </strong>{adult ? '18+' : '16+'}</Typography>
            <Typography variant={'body2'}><strong>Date of
                release: </strong>{release_date.split('-').reverse().join(' ')}</Typography>
            {spoken_languages.length !== 0 ?
                <Typography variant={'body2'}><strong>Languages: </strong>{spoken_languages.map(el => `${el.name} `)}
                </Typography> : null}
            {production_countries.length !== 0 ?
                <Typography variant={'body2'}><strong>Countries: </strong>{production_countries.map(el => el.name)}
                </Typography> : null}

            <Stack direction="row" spacing={1}>
                {genres.map(({id, name}) => <Chip label={name} variant="outlined" key={id}
                                                  onClick={() => navigate(`/genre/${id}`)}/>)}
            </Stack>

            <Typography variant={'body2'} sx={{textAlign: 'justify', width: '500px'}}>{overview}</Typography>
        </Card>
    )
}

export {MovieInfo};