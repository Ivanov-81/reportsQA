import * as React from 'react';
import { useEffect, useState } from "react";
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Content from './Components/Content/Content';
import { createBrowserHistory } from "history";
import './App.css';
import { Http } from "./classes/http";
import { addTickets } from "./actions/actionCreator";
import { useDispatch } from "react-redux";
import { Router } from "react-router";
import { Box } from "@mui/material";

export default function App() {
    const location = {};
    const history = createBrowserHistory();
    const dispatch = useDispatch();
    const [state, setState] = useState<boolean>(false);

    useEffect(() => {
        try {
            const data: any = Http.get('./data/allData.json');
            data
                .then((response: any) => response.json())
                .then((dt: any) => {
                    dispatch(addTickets(dt.issuesData.issues));
                });
        } catch (error: any) {
            console.log(error);
        }
    }, [])

    return (
        <>
            <Router location={location} navigator={history}>
                <Header state={state} setState={setState}/>
                <Menu state={state} setState={setState}/>
                <Box sx={{flexGrow: 1, padding: '82px 14px 14px'}}>
                    <Content/>
                </Box>
            </Router>
        </>
    );
}
