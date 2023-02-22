import React from 'react';
import {useParams} from "react-router-dom";

const MovieInfo = () => {
    const {filmId} = useParams();
    console.log(filmId)
    return (
        <div>
            MovieInfo
        </div>
    )
}

export {MovieInfo};