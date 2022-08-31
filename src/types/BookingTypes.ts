import { IInitialState } from "./IInitialStates";

export interface IAuthState {
    signInData: IInitialState,
    signUpData: IInitialState,
    numOfPages: number
}

export interface ISignInData {
    email: string,
    password: string
}