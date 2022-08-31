import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BOOKING } from './Types';
import { ISignInData } from '../../../types/BookingTypes';
import { bookingAPI } from './API';
import debounce from 'lodash/debounce'
import { DEBOUNCE_LIMIT } from '../../../constants/Constants';

export const bookingHandler = createAsyncThunk(
    BOOKING,
    async (data: any, { rejectWithValue }: any) => {
        try {
            const response: any = await bookingAPI(data);
            localStorage.setItem("id", response.data.user?._id);
            localStorage.setItem("user", JSON.stringify(response.data.user));
            return response.data.user;
        } catch (error: any) {
            console.log("error", error)
            return rejectWithValue(error?.response?.data);
        }
    }
);

const bookingDebouncedHandler = debounce(
    (arg, dispatch) => dispatch(bookingHandler(arg)),
    DEBOUNCE_LIMIT,
    { leading: true }
)

export const booking = (arg: any) => (dispatch: any) =>
    bookingDebouncedHandler(arg, dispatch)