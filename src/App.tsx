import React, {useEffect, useRef} from 'react';
import clsx from 'clsx';
import {makeStyles, TextField, Theme, withStyles} from "@material-ui/core";

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
