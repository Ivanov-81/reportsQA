import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Tickets from "./Tickets/Tickets";
import AddTicket from "./AddTicket/AddTicket";

export default function Content() {

    return (

        <Routes>
            <Route path="/add_ticket" element={<AddTicket/>}/>
            <Route path="/" element={<Tickets/>}/>
            <Route path="*">
                {/*<Redirect to={"/"}/>*/}
            </Route>
        </Routes>

    )
}
