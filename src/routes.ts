import { Router } from "express";
import { CreateBookController } from "./modules/books/createClients/CreateBookController";
import { FindBookController } from "./modules/books/findBbook/FindBookController";

const routes = Router();

const createBookController = new CreateBookController();
const findBookController = new FindBookController();

routes.post("/book/", createBookController.handle);

routes.get("/book/id", findBookController.handle);

export { routes };
