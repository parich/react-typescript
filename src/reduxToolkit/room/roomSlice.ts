import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { getRoomBooking } from "../../services/room.service";
import { RoomBooking } from "../../appTypes/roomBookingType";
import { AxiosError } from "axios";

// Define a type for the slice state
interface RoomBookingState {
  roomBooking: RoomBooking | null;
}

// Define the initial state using that type
const initialState: RoomBookingState = {
  roomBooking: null,
};

export const getRoomBookingThunk = createAsyncThunk<RoomBooking, void>(
  "room/getRoomBookingThunkStatus",
  async () => {
    try {
      const response = await getRoomBooking();
      //console.log(response.data);
      return response.data;
    } catch (error: any) {
      let err: AxiosError<any> = error;
      if (!err.response) {
        throw error;
      }
      return err.response.data;
    }
  }
);

export const roomBookingSlice = createSlice({
  name: "roomBooking",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getRoomBookingThunk.fulfilled,
      (state, action: PayloadAction<RoomBooking | null>) => {
        state.roomBooking = action.payload;
      }
    );
  },
});

//export const {  } = roomBookingSlice.actions;
//Other code such as selectors can use the imported `RootState` type
export const selectRoomBookingState = (state: RootState) =>
  state.roomBookingState;

export default roomBookingSlice.reducer;
