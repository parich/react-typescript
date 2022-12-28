export interface LogInTypeRes {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface LogInTypeResError {
  message: string;
  status_code: number;
}
