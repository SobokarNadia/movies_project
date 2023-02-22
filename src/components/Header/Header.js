import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to={'/home'}>Home</Link>
            <Link to={'/films'}>Movies</Link>
        </div>
    )
}

export {Header};