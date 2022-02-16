import * as React from 'react';
import {useEffect, useState} from "react";
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import {Box, Container, CssBaseline} from "@mui/material";

import './App.css';

export default function App() {

    const [state, setState] = useState<boolean>(false);

    useEffect(() => {
        console.log(state)
    }, [state])

    return (
        <>
            <CssBaseline />
            <Header state={state} setState={setState} />
            <Menu state={state} setState={setState} />
            <Container>
                <Box sx={{ my: 2 }}>
                    {[...new Array(12)]
                        .map(
                            () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
                        )
                        .join('\n')}
                </Box>
            </Container>
        </>
    );
}
