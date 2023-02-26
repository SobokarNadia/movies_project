import React from 'react';
import {Outlet} from "react-router-dom";
import {Paper} from "@mui/material";

import {Header, Navbar} from "../components";
import './MainLayout.css'


const MainLayout = () => {
    return (
        <Paper className={'layoutContainer'}>
            <Header/>
            <Navbar/>
            <Outlet/>
        </Paper>
    )
}

export {MainLayout};