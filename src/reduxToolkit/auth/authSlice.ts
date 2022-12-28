import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define a type for the slice state
interface AuthState {
  profile: string;
  email: string;
}

// Define the initial state using that type
const initialState: AuthState = {
  profile: "Parich Suriya",
  email: "parich@rmu.ac.th",
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    updateProfileAction: (state) => {
      (state.email = "parich@lives.rmu.ac.th"), (state.profile = "parich");
    },
  },
});

export const { updateProfileAction } = authSlice.actions;
//Other code such as selectors can use the imported `RootState` type
export const selectAuthState = (state: RootState) => state.authState;

export default authSlice.reducer;
