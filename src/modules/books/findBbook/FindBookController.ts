import { Request, Response } from "express";
import { FindBookUseCase } from "./FindBookUseCase";

class FindBookController {
  async handle(request: Request, response: Response) {
    const { id } = request;

    const findBookUseCase = new FindBookUseCase();
    const findBook = await findBookUseCase.execute(id);

    return response.json(findBook);
  }
}
export { FindBookController };
