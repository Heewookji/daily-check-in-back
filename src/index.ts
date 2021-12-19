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
  .delete("/user/:id", user.remove);

const app = new Application<{
  // user: Omit<IUser, "password"> | null;
}>();

// app.use(handleAuthHeader);
// app.use(handleErrors);
app.use(middlewares.responseLogger);

app.use(router.routes());
app.use(router.allowedMethods());

console.log(bgGreen(black("Server started on port 8000")));

await app.listen({ port: 8000 });
