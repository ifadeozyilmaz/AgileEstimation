
export namespace UserActions {
    export enum ActionTypes {
        STORE_USERNAME = 'UserActions.STORE_USERNAME'
    }

    export interface StoreUsernameAction {
        readonly type: ActionTypes.STORE_USERNAME;
        readonly payload: string;
    }


    export type AllActionInterfaces = StoreUsernameAction;

    export function storeUsername(username:string): StoreUsernameAction {
        return {
            type: ActionTypes.STORE_USERNAME,
            payload: username
        };
    }

}
