import * as React from 'react';
import {useEffect, useState} from "react";
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Content from './Components/Content/Content';

import './App.css';
import {Http} from "./classes/http";
import {addTickets} from "./actions/actionCreator";
import {useDispatch} from "react-redux";

export default function App() {

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
            <Header state={state} setState={setState}/>
            <Menu state={state} setState={setState}/>
            <Content/>
        </>
    );
}
