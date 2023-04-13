const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

(async function main() {
  try {
    const FF = await prisma.freight.create({
      data: {
        name: "Freight 1",
        description: "Freight 1 description",
        price: 10,
      },
    });
    console.log({ FF });
  } catch (error) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();
