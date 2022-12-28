import axios, { AxiosResponse } from "axios";

const http = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

export { http };
export type { AxiosResponse };
