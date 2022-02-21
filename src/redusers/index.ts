import { combineReducers } from 'redux';

import Event from './event';
import App from './app';

const allReducers = combineReducers({
    app: App,
    event: Event
});

export default allReducers;
