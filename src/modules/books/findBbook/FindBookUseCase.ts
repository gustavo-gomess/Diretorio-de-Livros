import { prisma } from "../../../database/prismaClients";

class FindBookUseCase {
  async execute(id: string) {
    const books = await prisma.library.findMany({
      where: {
        id: id,
      },
    });
  }
}

export { FindBookUseCase };
