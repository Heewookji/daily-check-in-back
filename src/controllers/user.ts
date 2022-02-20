import { RouterContext } from "../../deps.ts";

export const prefix = "/user";

export async function me(context: RouterContext<"/user/me">) {
  try {
    const { response, params, state } = context;
    response.status = 200;
    response.body = state.user;
    console.log(state.user);
  } catch (error) {
    throw error;
  }
}
