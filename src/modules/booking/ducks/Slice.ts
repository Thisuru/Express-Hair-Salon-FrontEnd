import { createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '../../../types/BookingTypes';
import { FulfilledObject, InitialObject, PendingObject, RejectedObject } from '../../../constants/Constants';
import { bookingHandler } from './Service';

const initialState: IAuthState = {
    signInData: { ...InitialObject },
    signUpData: { ...InitialObject },
    numOfPages: 1,
};


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(bookingHandler.pending, (state, action) => {
                state.signInData = { ...PendingObject };
            })
            .addCase(bookingHandler.fulfilled, (state, action) => {
                state.signInData = { ...FulfilledObject };
                state.signInData.data = action.payload;
                state.numOfPages = action.payload?.data?.numOfPages;
            })
            .addCase(bookingHandler.rejected, (state, action) => {
                state.signInData = { ...RejectedObject };
                state.signInData.error = action.payload;
            });
    },
});

export default authSlice.reducer;