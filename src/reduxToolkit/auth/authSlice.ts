import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { login } from "../../services/auth.service";
import { LoginFormInputType } from "../../appTypes/loginFormInputType";
import { LogInTypeRes, LogInTypeResError } from "../../appTypes/logInType";
import { AxiosError } from "axios";

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

export const loginThunk = createAsyncThunk<
  LogInTypeRes,
  LoginFormInputType,
  { rejectValue: LogInTypeResError }
>(
  "auth/loginThunkStatus",
  async (user: LoginFormInputType, { rejectWithValue }) => {
    try {
      const response = await login(user.email, user.password);
      //console.log(response.data);
      localStorage.setItem("token", JSON.stringify(response.data));
      return response.data;
    } catch (error: any) {
      let err: AxiosError<LogInTypeResError> = error;
      if (!err.response) {
        throw error;
      }
      return rejectWithValue(err.response.data);
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
  extraReducers: (builder) => {
    builder.addCase(
      loginThunk.fulfilled,
      (state, action: PayloadAction<LogInTypeRes | null>) => {
        state.loginResponse = action.payload;
      }
    );
  },
});

export const { updateProfileAction } = authSlice.actions;
//Other code such as selectors can use the imported `RootState` type
export const selectAuthState = (state: RootState) => state.authState;

export default authSlice.reducer;
