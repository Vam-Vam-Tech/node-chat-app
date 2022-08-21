import { Router } from "express";

const routes = Router();

//custom imports
import auth from "./auth.routes";
import user from "./user.routes";
import message from "./message.routes"

routes.use("/auth", auth);
routes.use("/users", user);
routes.use("/messages", message);

export default routes;
