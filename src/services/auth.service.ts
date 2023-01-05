import { LogInTypeRes } from "../appTypes/logInType";
import { ProfileResponse } from "../appTypes/profileType";
import { AxiosResponse, http } from "./http.service";

export async function login(
  email: string,
  password: string
): Promise<AxiosResponse<LogInTypeRes>> {
  return await http.post<LogInTypeRes>(
    "https://api.codingthailand.com/api/login",
    {
      email: email,
      password: password,
    }
  );
}

export function logout(): void {
  localStorage.removeItem("token");
}

export async function getProfile(): Promise<AxiosResponse<ProfileResponse> | null> {
  const token = JSON.parse(localStorage.getItem("token")!) as LogInTypeRes;
  if (!token) {
    return null;
  }
  return await http.get<ProfileResponse>(
    "https://api.codingthailand.com/api/profile",
    { headers: { Authorization: "Bearer " + token.access_token } }
  );
}
