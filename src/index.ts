import { Application, bgGreen, black, Router } from "../deps.ts";
// import { hello, signup, login, me } from "./controllers/user.ts";
import * as user from "./controllers/user.ts";
import * as middlewares from "./middlewares.ts";
// import { handleAuthHeader, handleErrors } from "./middlewares.ts";
// import { IUser } from "./types.ts";

const router = new Router();

router
  .post("/user", user.create)
  .get("/user/me", user.me)
  .get("/user/:id", user.get)
  .patch("/user/:id", user.update)
  .delete("/user/:id", user.remove);

const app = new Application<{
  // user: Omit<IUser, "password"> | null;
}>();

// app.use(handleAuthHeader);
app.use(middlewares.handleErrors);
app.use(middlewares.responseLogger);
app.use(middlewares.setResponseHeader);

app.use(router.routes());
app.use(router.allowedMethods());

const port = 8989;

console.log(bgGreen(black(`Server started on port: ${port}`)));

await app.listen({ port });
