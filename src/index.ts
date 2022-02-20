import { Application, bgGreen, black, Router } from "../deps.ts";
import * as user from "./controllers/user.ts";
import * as answer from "./controllers/answer.ts";
import * as middlewares from "./middlewares.ts";
import { ContextState } from "./types.ts";

const app = new Application<ContextState>();

app.use(middlewares.handleAuthHeader);
app.use(middlewares.handleErrors);
app.use(middlewares.responseLogger);
app.use(middlewares.setResponseHeader);

const router = getRouter();
app.use(router.routes());
app.use(router.allowedMethods());

const port = 8989;

console.log(bgGreen(black(`Server started on port: ${port}`)));

await app.listen({ port });

function getRouter() {
  return new Router()
    .get(`${user.prefix}/me`, user.me)
    .get(`${answer.prefix}`, answer.list)
    .post(`${answer.prefix}`, answer.create)
    .patch(`${answer.prefix}`, answer.update)
    .delete(`${answer.prefix}`, answer.remove)
    .get(`${answer.prefix}/:id`, answer.get);
}
