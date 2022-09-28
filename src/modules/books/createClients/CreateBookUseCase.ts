import { prisma } from "../../../database/prismaClients";

interface ICreateBook {
  name: string;
  author: string;
}

class CreateBookUseCase {
  async execute({ name, author }: ICreateBook) {
    const bookExist = await prisma.library.findFirst({
      where: {
        name: {
          equals: name,
        },
      },
    });

    if (bookExist) {
      throw new Error("name already exists");
    }

    const book = await prisma.library.create({
      data: {
        name,
        author,
      },
    });

    return book;
  }
}

export { CreateBookUseCase };
