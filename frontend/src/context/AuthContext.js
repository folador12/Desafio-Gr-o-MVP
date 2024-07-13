import { createContext } from "react";
import { destroyCookie, setCookie } from "nookies";
import Router from "next/router";
import { setupAPIClient } from "@/service/api";

export const AuthContext = createContext({});

const api = setupAPIClient();

export function signOut() {
  try {
    destroyCookie(undefined, "token");
    Router.push("/");
  } catch {
    console.log("erro ao deslogar");
  }
}

export function AuthProvider({ children }) {
  async function signIn(data) {
    try {
      const response = await api.post("/users/login", data);

      const { user, token } = response.data;

      setCookie(undefined, "token", token, {
        maxAge: 60 * 60 * 24,
      });

      setCookie(undefined, "user", JSON.stringify(user), {
        maxAge: 60 * 60 * 24,
      });

      return { status: response.status, message: "Login efetuado com sucesso" };
    } catch (error) {
      return {
        message: error.response.data.message,
        status: error.response.status,
      };
    }
  }
  return (
    <AuthContext.Provider value={{ signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
