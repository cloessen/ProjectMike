import { Action } from '@ngrx/store';
import { Entry } from 'contentful';

export enum AppActionTypes {
    START_LOADING = '[App] Start Loading',
    STOP_LOADING = '[App] Stop Loading',
    SHOW_POST_DETAILS = '[App] Show Post Details'
}

export class StartLoading implements Action {
    readonly type = AppActionTypes.START_LOADING;
}
export class StopLoading implements Action {
    readonly type = AppActionTypes.STOP_LOADING;
}
export class ShowPostDetails implements Action {
    readonly type = AppActionTypes.SHOW_POST_DETAILS;

    constructor(public payload: Entry<any>) {}
}


export type AppActionsUnion = StartLoading | StopLoading | ShowPostDetails;
