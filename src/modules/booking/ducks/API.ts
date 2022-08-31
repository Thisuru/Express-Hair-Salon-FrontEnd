import { ISignInData } from "../../../types/BookingTypes";
import { BOOKING } from "../../../utils/EndPoints";
import HTTPClient from "../../../utils/HTTPClient";

export function bookingAPI(data: any) {
    return HTTPClient.Post(BOOKING, data);
}