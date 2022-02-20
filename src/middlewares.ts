import { Context } from "../deps.ts";
import { User } from "./models/user.ts";
import { verifyFirebaseJWT } from "./helpers.ts";

export async function handleAuthHeader(
  context: Context,
  next: () => Promise<unknown>,
) {
  try {
    const { request, state } = context;
    const authorization = request.headers.get("Authorization");
    if (!authorization) {
      return;
    }
    const jwt = authorization?.split("Bearer ")?.[1];
    if (!jwt) {
      return;
    }
    const payload = await verifyFirebaseJWT(jwt);
    if (!payload) {
      context.response.status = 401;
      return;
    }
    const uid = payload.sub as string;
    //todo: 없다면 새로 만들어줘야함
    state.user = await User.findByUid(uid);
  } catch (error) {
    throw error;
  } finally {
    await next();
  }
}

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
