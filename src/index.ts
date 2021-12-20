import {
  bgGreen,
  black,
  Application,
  Router,
} from "../deps.ts";
// import { hello, signup, login, me } from "./controllers/user.ts";
import * as user from "./controllers/user.ts";
import * as middlewares from "./middlewares.ts";
// import { handleAuthHeader, handleErrors } from "./middlewares.ts";
// import { IUser } from "./types.ts";

const router = new Router();

router
  .post("/user", user.create)
  .get("/user/:id", user.get)
  .patch("/user/:id", user.update)
  .delete("/user/:id", user.remove)
  .get("/user/me", user.me);

const app = new Application<{
  // user: Omit<IUser, "password"> | null;
}>();

// app.use(handleAuthHeader);
// app.use(handleErrors);
// app.use(middlewares.responseLogger);

app.use(async (ctx, next) => {
  const responseHeaders = ctx.response.headers;
  responseHeaders.set("Access-Control-Allow-Origin", "*");
  responseHeaders.set(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, DELETE"
  );
  responseHeaders.set("Access-Control-Allow-Headers", "Content-Type");
  await next();
});
app.use(router.routes());
app.use(router.allowedMethods());

const port = 8989;

console.log(bgGreen(black(`Server started on port: ${port}`)));

await app.listen({ port });
