import { IInitialState } from "../types/IInitialStates";

export const IS_ENABLE_SIGN_UP = true;

export const InitialObject: IInitialState = {
    loading: true,
    pending: false,
    hasError: false,
    data: [],
    error: {},
}

export const PendingObject: IInitialState = {
    loading: true,
    pending: true,
    hasError: false
}

export const FulfilledObject: IInitialState = {
    loading: false,
    pending: false,
    hasError: false
}

export const RejectedObject: IInitialState = {
    loading: false,
    pending: false,
    hasError: true
}

export const DEBOUNCE_LIMIT = 1000; //ms