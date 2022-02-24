import {
    ADD_TICKETS
} from "../ts/constants";

const defaultState: object = {
    tickets: []
};

const data: any = (state = defaultState, action: any) => {
    switch (action.type) {
        case ADD_TICKETS:
            return Object.assign({}, state, {
                tickets: action.tickets,
            });
        default:
            return state;
    }
};

export default data;
