import {UserActions} from '../actions';

export interface UserReducerState {
    username: string | undefined;
}

/**
 * Initial user reducer state
 * @type {{UserReducerState: string | undefined}}
 */
const INITIAL_STATE: UserReducerState = {
    username: undefined
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
        default:
            return aState;
    }
}
