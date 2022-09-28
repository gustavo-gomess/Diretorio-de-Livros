import { Router } from "express";
import { CreateBookController } from "./modules/clients/createClients/CreateBookController";

const routes = Router();

const createBookController = new CreateBookController();

routes.post("/book/", createBookController.handle);

export { routes };
