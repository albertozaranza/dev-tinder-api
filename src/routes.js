import express from "express";

import UserController from "./controllers/UserController";
import LikeController from "./controllers/LikeController";
import DislikeController from "./controllers/DislikeController";

const routes = express.Router();

routes.get("/users", UserController.index);
routes.post("/users", UserController.store);
routes.post("/users/:id/likes", LikeController.store);
routes.post("/users/:id/dislikes", DislikeController.store);

export default routes;
