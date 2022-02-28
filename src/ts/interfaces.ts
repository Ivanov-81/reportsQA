import * as React from "react";
import {
    ADD_USER, ADD_EVENT,
    CHANGE_USER, CHANGE_LANGUAGE,
    CHANGE_LOCATION, SWITCH_AUTH, ADD_TICKETS
} from "./constants";
import type {
    History,
    InitialEntry,
    Location,
    MemoryHistory,
    Path,
    To,
} from "history";

export interface IStore {
    data: {
        tickets: ITicket[]
    }
    app: {
        user: {
            email: string
            role: string
            filled: boolean
        }
        auth: boolean
        mode: 'light' | 'dark'
        language: 'ru' | 'en' | 'es'
        languages: ILang[]
    }
    event: EventTarget
}

export interface ITicket {
    status: { id: string }
}

export interface ILang {
    language: 'ru' | 'en' | 'es'
    country: 'Ру' | 'En' | 'Es'
}

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

export interface AddTickets {
    type: typeof ADD_TICKETS;
    tickets: any;
}

export interface defaultStateEvent {
    event: any
}

export interface RouterProps {
    basename?: string;
    children?: React.ReactNode;
    location: Partial<Location> | string;
    navigationType?: NavigationType;
    navigator: Navigator;
    static?: boolean;
}

export type ReportsActionTypes = ChangeLocation
    | ChangeLanguage
    | AddEvent
    | AddUser
    | ChangeUser
    | SwitchAuth
    | AddTickets

export type AppActions = ReportsActionTypes
