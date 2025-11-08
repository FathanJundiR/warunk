const { PrismaClient } = require("../../generated/prisma/client");

const globalForPrisma = globalThis; //mencegah multiple instances di development

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    omit: {
      user: { password: true },
    },
    log: ["query", "error", "warn"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

process.on("beforeExit", async () => {
  await prisma.$disconnect();
});

module.exports = prisma;
