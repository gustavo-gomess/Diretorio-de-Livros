import { Request, Response } from "express";
import { CreateBookUseCase } from "./CreateBookUseCase";

class CreateBookController {
  async handle(request: Request, response: Response) {
    const { name, author } = request.body;

    const createBookUseCase = new CreateBookUseCase();

    const result = await createBookUseCase.execute({
      name,
      author,
    });

    return response.json(result);
  }
}

export { CreateBookController };
