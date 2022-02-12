import { Application, bgGreen, black, Router } from "../deps.ts";
import * as user from "./controllers/user.ts";
import * as middlewares from "./middlewares.ts";
import * as firebaseAdmin from "./firebase.ts";

firebaseAdmin.initialize();
const router = new Router();

router
  .get("/user/me", user.me);
// .post("/user", user.create)
// .get("/user/:id", user.get)
// .patch("/user/:id", user.update)
// .delete("/user/:id", user.remove);

const app = new Application<{
  // user: Omit<IUser, "password"> | null;
}>();

// app.use(middlewares.handleAuthHeader);
app.use(middlewares.handleErrors);
app.use(middlewares.responseLogger);
app.use(middlewares.setResponseHeader);

app.use(router.routes());
app.use(router.allowedMethods());

const port = 8989;

console.log(bgGreen(black(`Server started on port: ${port}`)));

await app.listen({ port });
