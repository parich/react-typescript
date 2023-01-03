import { LogInTypeRes } from "../appTypes/logInType";
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
    localStorage.removeItem('token')
}

export function getProfile() {}
