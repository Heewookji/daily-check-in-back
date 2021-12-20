import {
    RouterContext,
    RouteParams,
    RSA,
} from "../../deps.ts";
import { User } from "../models/user.ts";

export async function me(
    context: RouterContext<'/user/me',
        { id: string; } & RouteParams<string>,
        Record<string, any>>
) {
  const keyString = "";
  const key = RSA.parseKey(keyString);
  try {
    const { response, params } = context;
    console.log(context);
    // const payload = await verify('jwt', key);
    // console.log(payload);
    response.status = 201;
    response.body = {
      data: '',
    };
  } catch (error) {
    throw error;
  }
}

export async function create(
  context: RouterContext<'/user',
  RouteParams<string>,
  Record<string, any>>
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
  context: RouterContext<'/user/:id',
  { id: string; } & RouteParams<string>,
  Record<string, any>>
) {
  try {
    const { response, params } = context;
    const result = await User.find(params.id);
    response.status = 201;
    response.body = {
      data: result,
    };
  } catch (error) {
    throw error;
  }
}

export async function update(
  context: RouterContext<'/user/:id',
  { id: string; } & RouteParams<string>,
  Record<string, any>>
) {
  try {
    const { response, params } = context;
    const result = await User.where('id', params.id)
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
  context: RouterContext<'/user/:id',
  { id: string; } & RouteParams<string>,
  Record<string, any>>
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