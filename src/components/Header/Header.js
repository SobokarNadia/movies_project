import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";

import {AppBar, IconButton, Stack, Toolbar, Typography, Button, Input, Box, Switch} from "@mui/material";
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import {AccountCircle} from "@mui/icons-material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import {movieActions} from "../../redux";


const Header = () => {
    const keyword = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = ({target: {checked}}) => {
        dispatch(movieActions.setMode({checked}));
    }

    const submit = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            navigate('/search', {state: keyword.current.value});
        }
    }

    return (
        <AppBar position={'fixed'} color={"primary"}>
            <Toolbar>
                <IconButton disabled={true} size={'large'} edge={'start'}>
                    <LiveTvIcon aria-label={'logo'}/>
                </IconButton>
                <Typography variarnt={'h1'} component={'div'} sx={{flexGrow: 1}}>MOVIES</Typography>

                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    onClick={() => navigate(-1)}
                >
                    <NavigateBeforeIcon/>
                </IconButton>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    onClick={() => navigate(1)
                    }
                >
                    <NavigateNextIcon/>
                </IconButton>

                <Stack direction={'row'} spacing={2}>
                    <Switch onChange={handleChange} color={'default'}/>
                    <Button color={'inherit'} onClick={() => navigate('/home')}>Home</Button>
                    <Button color={'inherit'} onClick={() => navigate('/movies')}>Movies</Button>

                    <Box>
                        <SearchIcon/>
                        <Input type="text" onKeyDown={(e) => submit(e)} inputRef={keyword} placeholder={'Search...'}/>
                    </Box>
                </Stack>

                <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                >
                    <AccountCircle/>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export {Header};