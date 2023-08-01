import {RoomActions} from '../actions';

export interface RoomReducerState {
    room: number | string | undefined;
}

/**
 * Initial room reducer state
 * @type {{RoomReducerState: number | string | undefined}}
 */
const INITIAL_STATE: RoomReducerState = {
    room: undefined
};

/**
 * room reducer
 * @param {RoomReducerState} aState The current state
 * @param {RoomActions.AllActionInterfaces} aAction The action to execute
 * @returns {RoomReducerState} The new state
 */
export function roomReducer(aState: RoomReducerState = INITIAL_STATE, aAction: RoomActions.AllActionInterfaces): RoomReducerState {
    switch (aAction.type) {
        case RoomActions.ActionTypes.STORE_ROOM:
            return {
                ...aState,
                room: aAction.payload
            };
        default:
            return aState;
    }
}
