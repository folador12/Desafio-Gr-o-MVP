import axios from "axios";
import { parseCookies } from "nookies";
import { AuthTokenError } from "./errors/authTokenError";
import { signOut } from "@/context/AuthContext";

export const setupAPIClient = (ctx) => {
  const api = axios.create({
    baseURL: "http://localhost:3333/api",
  });

  api.interceptors.request.use(async (config) => {
    const { token: token } = parseCookies(ctx);
    if (token) {
      config.headers["token"] = token;
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 401) {
        if (typeof window !== "undefined") {
          signOut();
        } else {
          return Promise.reject(new AuthTokenError());
        }
      }
      return Promise.reject(error);
    }
  );

  return api;
};
