import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { login } from "../../services/auth.service";
import { LoginFormInputType } from "../../appTypes/loginFormInputType";
import { LogInTypeRes } from "../../appTypes/logInType";

// Define a type for the slice state
interface AuthState {
  profile: string;
  email: string;
  loginResponse: LogInTypeRes | null;
}

// Define the initial state using that type
const initialState: AuthState = {
  profile: "Parich Suriya Example",
  email: "parich@rmu.ac.th Example",
  loginResponse: null,
};

export const loginThunk = createAsyncThunk(
  "auth/loginThunkStatus",
  async (user: LoginFormInputType) => {
    try {
      const response = await login(user.email, user.password);
      console.log(response.data);
      return response.data;
    } catch (error: any) {
      console.log(error);
    }
  }
);

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
