import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios, { AxiosError } from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const apiClient = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
  withCredentials: true,
});
