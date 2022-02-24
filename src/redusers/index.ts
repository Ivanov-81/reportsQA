import { combineReducers } from 'redux';

import Event from './event';
import App from './app';
import Data from './data';

const allReducers = combineReducers({
    data: Data,
    app: App,
    event: Event
});

export default allReducers;
