import {UserActions} from '../actions';

export interface UserReducerState {
    username: string;
    usersInRoom: string[];
}

/**
 * Initial user reducer state
 * @type {{UserReducerState: string }}
 * @type {{UserReducerState: string []}}
 */
const INITIAL_STATE: UserReducerState = {
    username: "",
    usersInRoom: [],
};

/**
 * user reducer
 * @param {UserReducerState} aState The current state
 * @param {UserActions.AllActionInterfaces} aAction The action to execute
 * @returns {UserReducerState} The new state
 */
export function userReducer(aState: UserReducerState = INITIAL_STATE, aAction: UserActions.AllActionInterfaces): UserReducerState {
    switch (aAction.type) {
        case UserActions.ActionTypes.STORE_USERNAME:
            return {
                ...aState,
                username: aAction.payload
            };
        case UserActions.ActionTypes.STORE_USERS_IN_ROOM:
            return {
                ...aState,
                usersInRoom: aAction.payload
            };
        default:
            return aState;
    }
}
