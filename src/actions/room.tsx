export namespace RoomActions {
    export enum ActionTypes {
        STORE_ROOM = 'RoomActions.STORE_ROOM'
    }

    export interface StoreRoomAction {
        readonly type: ActionTypes.STORE_ROOM;
        readonly payload: number | string;
    }


    export type AllActionInterfaces = StoreRoomAction;

    export function storeRoom(room:number | string): StoreRoomAction {
        return {
            type: ActionTypes.STORE_ROOM,
            payload: room
        };
    }

}
