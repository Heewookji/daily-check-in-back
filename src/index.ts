import {
  bgGreen,
  black,
  Application,
  Router,
} from "../deps.ts";
// import { hello, signup, login, me } from "./controllers/user.ts";
import * as user from "./controllers/user.ts";
// import { handleAuthHeader, handleErrors } from "./middlewares.ts";
// import { IUser } from "./types.ts";

const router = new Router();

router
  .get("/user/create", user.create)
  // .post("/posts", createPost)
  // .get("/posts/:id", getPost)
  // .delete("/posts/:id", deletePost);

const app = new Application<{
  // user: Omit<IUser, "password"> | null;
}>();

// app.use(handleAuthHeader);
// app.use(handleErrors);

app.use(router.routes());
app.use(router.allowedMethods());

console.log(bgGreen(black("Server started on port 8000")));

await app.listen({ port: 8000 });
