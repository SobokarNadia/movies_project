import React from 'react';
import {Outlet} from "react-router-dom";

import {Header, Sidebar} from "../components";


const MainLayout = () => {
    return (
        <div>
            <Header/>
            <div>
                <Sidebar/>
                <Outlet/>
            </div>
        </div>
    )
}

export {MainLayout};