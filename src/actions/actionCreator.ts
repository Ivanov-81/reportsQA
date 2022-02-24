import {
    ADD_EVENT,
    CHANGE_LANGUAGE,
    ADD_USER, SWITCH_AUTH, ADD_TICKETS
} from "../ts/constants";

import {AppActions, IUser} from "../ts/interfaces";

export const addEvent = (event: any): AppActions => ({
    type: ADD_EVENT,
    event
});

export const switchAuth = (auth: boolean): AppActions => ({
    type: SWITCH_AUTH,
    auth
});

export const changeLanguage = (language: string): AppActions => ({
    type: CHANGE_LANGUAGE,
    language
});

export const addUser = (user: IUser): AppActions => ({
    type: ADD_USER,
    user
});

export const addTickets = (tickets: []): AppActions => ({
    type: ADD_TICKETS,
    tickets
});
