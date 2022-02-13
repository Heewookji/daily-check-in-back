import {  RouterContext,helpers } from "../../deps.ts";
import { Answer } from "../models/Answer.ts";
import {Comment} from "../models/comment.ts";

export const prefix = '/answer';

// todo: validate request params
export async function list(context: RouterContext<"/answer">) {
  try {
    const { response } = context;
    const query =  helpers.getQuery(context, { mergeParams: true });
    const page = parseInt(query.page!);
    const limit = parseInt(query.limit!);
    const result = await Answer
      .select(
        Answer.field('content'),
        Comment.field('content'),
      )
      .leftOuterJoin(Comment, Comment.field('answer_id'), Answer.field('id'))
      .skip(page * limit).take(limit)
      .orderBy(Answer.field('created_at'), 'desc')
      .get();
    console.log(result);
    response.status = 200;
    response.body = {
      data: result,
    };
  } catch (error) {
    throw error;
  }
}


export async function get(context: RouterContext<"/answer/:id">) {
  // try {
  //   const { response, params } = context;
  //   const result = await Answer.find(params.id);
  //   response.status = 200;
  //
  //   response.body = {
  //     data: result,
  //   };
  // } catch (error) {
  //   throw error;
  // }
}

export async function create(context: RouterContext<"/answer">) {
  // try {
  //   const { response, request } = context;
  //   const Answer = await request.body().value;
  //   const result = await Answer.create(Answer);
  //   response.status = 201;
  //   response.body = {
  //     data: result,
  //   };
  // } catch (error) {
  //   throw error;
  // }
}


export async function update(context: RouterContext<"/answer">) {
  // try {
  //   const { response, params } = context;
  //   const result = await Answer.where("id", params.id)
  //     .update("name", "updated Name");
  //   response.status = 201;
  //   response.body = {
  //     data: result,
  //   };
  // } catch (error) {
  //   throw error;
  // }
}

export async function remove(context: RouterContext<"/answer">) {
  // try {
  //   const { response, params } = context;
  //   const result = await Answer.deleteById(params.id);
  //   response.status = 201;
  //   response.body = {
  //     data: result,
  //   };
  // } catch (error) {
  //   throw error;
  // }
}
