import { CHANGE_SEARCH_FIELD } from "./constans";

const initialState = { searchfield: '' };

export const searchRobots = (state=initialState, action={}) => {
    // console.log(action.type);
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchfield: action.payload });
        default:
            return state;
    }
}