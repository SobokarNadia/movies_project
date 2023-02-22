import React from 'react';
import {StarsRating} from "../StarsRating/StarsRating";
import {useNavigate} from "react-router-dom";


const MovieCard = ({movie}) => {
    const {id, title, vote_average, genre_ids, poster_path} = movie;
    const navigate = useNavigate();

    return (
        <div style={{border:'1px black solid'}}>
            <div>{title}</div>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`${title}`}/>
            <StarsRating vote_average={vote_average}/>
            <div>{genre_ids} </div>
            <button onClick={()=> navigate(`${id.toString()}`)}>Details</button>
        </div>
    )
}

export {MovieCard};