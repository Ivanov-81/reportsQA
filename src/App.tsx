import * as React from 'react';
import {useEffect, useState} from "react";
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Content from './Components/Content/Content';
import {Box, Container, Grid, Paper, styled} from "@mui/material";

import './App.css';
import {Http} from "./classes/http";

export default function App() {

    const [state, setState] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            try {
                const data: any = Http.get('./data/allData.json');
                data
                    .then((response: any) => response.json())
                    .then((dt: any) => console.log(dt));
            } catch (error: any) {
                console.log(error);
            }
        }, 3000);
    }, [])

    return (
        <>
            <Header state={state} setState={setState}/>
            <Menu state={state} setState={setState}/>
            <Content />
        </>
    )
        ;
}
