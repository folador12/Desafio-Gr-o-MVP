import { parseCookies, destroyCookie } from "nookies";
import { AuthTokenError } from "@/service/errors/authTokenError";

export function canSSRAuth(fn) {
  return async (ctx) => {
    const cookies = parseCookies(ctx);
    const token = cookies["token"];

    if (!token) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    try {
      return await fn(ctx);
    } catch (err) {
      if (err instanceof AuthTokenError) {
        destroyCookie(ctx, "token");
      }
      return {
        redirect: "/",
        permanent: false,
      };
    }
  };
}
