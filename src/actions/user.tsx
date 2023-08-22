export namespace UserActions {
    export enum ActionTypes {
        STORE_USERNAME = 'UserActions.STORE_USERNAME',
        STORE_USERS_IN_ROOM = 'UserActions.STORE_USERS_IN_ROOM',
        STORE_SELECTED_CARDS = 'UserActions.STORE_SELECTED_CARDS'
    }

    export interface StoreUsernameAction {
        readonly type: ActionTypes.STORE_USERNAME;
        readonly payload: string;
    }

    export interface StoreUsersInRoomAction {
        readonly type: ActionTypes.STORE_USERS_IN_ROOM;
        readonly payload: string[];
    }

    export interface StoreSelectedCardsAction {
        readonly type: ActionTypes.STORE_SELECTED_CARDS;
        readonly payload: string[];
    }


    export type AllActionInterfaces = StoreUsernameAction | StoreUsersInRoomAction | StoreSelectedCardsAction;

    export function storeUsername(username: string): StoreUsernameAction {
        return {
            type: ActionTypes.STORE_USERNAME,
            payload: username
        };
    }

    export function storeUsersInRoom(usersInRoom: string[]): StoreUsersInRoomAction {
        return {
            type: ActionTypes.STORE_USERS_IN_ROOM,
            payload: usersInRoom
        };
    }

    export function storeSelectedCards(selectedCards: string[]): StoreSelectedCardsAction {
        return {
            type: ActionTypes.STORE_SELECTED_CARDS,
            payload: selectedCards
        };
    }

}
