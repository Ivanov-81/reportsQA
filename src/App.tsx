import React, {useEffect, useRef} from 'react'
import clsx from 'clsx'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import {makeStyles, TextField, Theme, withStyles} from "@material-ui/core"
import LinearProgress, {LinearProgressProps} from '@material-ui/core/LinearProgress'
import CircularProgress, {CircularProgressProps} from '@material-ui/core/CircularProgress';

import './App.css'

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        maxWidth: '100%',
    }
}));

function App() {

    const resInput = useRef(null)

    const classes = useStyles();

    const [value, setValue] = React.useState(0);


    useEffect(() => {
    }, []);

    return (
        <div className="App"/>
    );
}

export default App;
