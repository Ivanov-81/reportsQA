import {
    ADD_EVENT,
    CHANGE_LANGUAGE,
    SWITCH_DRAG_CARD,
    ADD_USER, SWITCH_AUTH
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

export const switchDragCard = (drag_card: boolean): AppActions => ({
    type: SWITCH_DRAG_CARD,
    drag_card
});

export const addUser = (user: IUser): AppActions => ({
    type: ADD_USER,
    user
});
