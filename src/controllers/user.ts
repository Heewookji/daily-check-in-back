import {
    RouterContext,
    RouteParams,
} from "../../deps.ts";
import { User } from "../models/user.ts";

export async function create(ctx: RouterContext<'/user/create', RouteParams<string>, Record<string, any>>) {
  try {
    const { response } = ctx;
    const user = await User.create({
      name: 'heewook',
      email: 'wlgmldnr@naver.com',
    });
    response.status = 201;
    response.body = {
      data: user,
    };
  } catch (error) {
    throw error;
  }
}