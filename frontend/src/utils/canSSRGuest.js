import { parseCookies } from "nookies";

export function canSSRGuest(fn) {
  return async (ctx) => {
    const cookies = parseCookies(ctx);
    if (cookies["token"]) {
      return {
        redirect: {
          destination: "/restaurants",
          permanent: false,
        },
      };
    }

    return await fn(ctx);
  };
}
