import {UserActions} from '../actions';


export interface UserReducerState {
    username: string | undefined;
}

/**
 * Initial application reducer state
 * @type {{initializationState: number}}
 */
const INITIAL_STATE: UserReducerState = {
    username: undefined
};

/**
 * An example application reducer
 * @param {Object} aState The current state
 * @param {Object} aAction The action to execute
 * @returns {Object} The new state
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
