import { Context } from "../deps.ts";
import { config } from "./config.ts";
import { User } from "./models/user.ts";

// export async function handleAuthHeader(
//   ctx: Context<{ user: Omit<User, "password"> | null }>,
//   next: () => Promise<unknown>,
// ) {
//   try {
//     const { request, state } = ctx;
//     const authorization = request.headers.get("Authorization");
//     if (!authorization) {
//       ctx.response.status = 401;
//       return;
//     }
//     const jwt = authorization.split("bearer ")?.[1];
//     if (!jwt) {
//       ctx.response.status = 401;
//       return;
//     }
//     // const payload = await verifyJwt(jwt);
//     console.log("payload", payload);
//     if (!payload) {
//       ctx.response.status = 401;
//       return;
//     }
//     const userId = payload.id as string;
//     state.user = await User.find(userId);
//   } catch (error) {
//     throw error;
//   } finally {
//     await next();
//   }
// }

export async function handleErrors(
  context: Context,
  next: () => Promise<unknown>,
) {
  try {
    await next();
  } catch (err) {
    context.response.status = err.status;
    const { message = "unknown error", status = 500, stack = null } = err;
    context.response.body = { message, status, stack };
    context.response.type = "json";
  }
}

export async function setResponseHeader(
  context: Context,
  next: () => Promise<unknown>,
) {
  await next();
  const responseHeaders = context.response.headers;
  responseHeaders.set("Access-Control-Allow-Origin", "*");
  responseHeaders.set(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, DELETE",
  );
  responseHeaders.set("Access-Control-Allow-Headers", "authorization");
}

export async function responseLogger(
  context: Context,
  next: () => Promise<unknown>,
) {
  await next();
  if (context.request.method !== "OPTIONS") {
    const responseTime = new Date().toLocaleString();
    console.log(
      `${context.request.method} ${context.request.url} - ${responseTime}`,
    );
  }
}
