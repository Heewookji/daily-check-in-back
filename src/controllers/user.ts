import { RouteParams, RouterContext } from "../../deps.ts";
import { User } from "../models/user.ts";

export async function me(
  context: RouterContext<"/user/me", RouteParams<string>, Record<string, any>>,
) {
  try {
    const { response, params, state } = context;
    response.status = 200;
    response.body = state.user;
  } catch (error) {
    throw error;
  }
}

export async function create(
  context: RouterContext<"/user", RouteParams<string>, Record<string, any>>,
) {
  try {
    const { response, request } = context;
    const user = await request.body().value;
    const result = await User.create(user);
    response.status = 201;
    response.body = {
      data: result,
    };
  } catch (error) {
    throw error;
  }
}

export async function get(
  context: RouterContext<
    "/user/:id",
    { id: string } & RouteParams<string>,
    Record<string, any>
  >,
) {
  try {
    const { response, params } = context;
    const result = await User.find(params.id);
    response.status = 200;

    response.body = {
      data: result,
    };
  } catch (error) {
    throw error;
  }
}

export async function update(
  context: RouterContext<
    "/user/:id",
    { id: string } & RouteParams<string>,
    Record<string, any>
  >,
) {
  try {
    const { response, params } = context;
    const result = await User.where("id", params.id)
      .update("name", "updated Name");
    response.status = 201;
    response.body = {
      data: result,
    };
  } catch (error) {
    throw error;
  }
}

export async function remove(
  context: RouterContext<
    "/user/:id",
    { id: string } & RouteParams<string>,
    Record<string, any>
  >,
) {
  try {
    const { response, params } = context;
    const result = await User.deleteById(params.id);
    response.status = 201;
    response.body = {
      data: result,
    };
  } catch (error) {
    throw error;
  }
}
