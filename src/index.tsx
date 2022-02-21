import React, { Suspense } from "react";
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from "react-redux";
import allReducers from "./redusers";
import { addEvent, changeLanguage } from "./actions/actionCreator";
import App from './App';

import './index.css';
let store: any;

if (window.location.hostname === "localhost") {
    store = createStore(
        allReducers,
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    );
} else {
    store = createStore(allReducers);
}

store.subscribe(() => console.log(store.getState()));

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw_reports_qa.js", { scope: "/" });
    });
}

window.addEventListener("beforeinstallprompt", function (e) {
    e.preventDefault();
    store.dispatch(addEvent(e));
});

// Определение языковой локали
let config = {
    language: "ru",
    country: "RU",
};

let client = window.navigator ? window.navigator.language : config.language;

let language =
    client.search("-") > 0
        ? client.substring(0, client.search("-")).toLowerCase()
        : client.toLowerCase();

store.dispatch(changeLanguage(language));

ReactDOM.render(
    <Suspense fallback="loading">
        <Provider store={store}>
            <App />
        </Provider>
    </Suspense>,
    document.getElementById('root')
);
