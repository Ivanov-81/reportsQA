import {
    ADD_USER, ADD_EVENT,
    CHANGE_USER, CHANGE_LANGUAGE,
    CHANGE_LOCATION, SWITCH_DRAG_CARD, SWITCH_AUTH
} from "./constants";

export interface IUser {
    name?: string
    surname?: string
    patronymic?: string
    email: string
    role: "admin" | "user" | ""
    filled: boolean
}

export interface SwitchAuth {
    type: typeof SWITCH_AUTH;
    auth: boolean
}

export interface ChangeLocation {
    type: typeof CHANGE_LOCATION;
    location: any
}

export interface ChangeLanguage {
    type: typeof CHANGE_LANGUAGE;
    language: string
}

export interface AddEvent {
    type: typeof ADD_EVENT;
    event: any
}

export interface AddUser {
    type: typeof ADD_USER;
    user: IUser;
}

export interface ChangeUser {
    type: typeof CHANGE_USER;
    user: IUser;
}

export interface SwitchDragCard {
    type: typeof SWITCH_DRAG_CARD;
    drag_card: boolean;
}

export interface defaultStateEvent {
    event: any
}

export type ReportsActionTypes = ChangeLocation
    | ChangeLanguage
    | AddEvent
    | SwitchDragCard
    | AddUser
    | ChangeUser
    | SwitchAuth

export type AppActions = ReportsActionTypes
