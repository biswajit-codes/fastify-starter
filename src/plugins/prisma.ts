// import "dotenv/config";
// import fp from "fastify-plugin";
// import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
// import { PrismaClient } from "../generated/prisma/client";

// declare module "fastify" {
//   interface FastifyInstance {
//     prisma: PrismaClient;
//   }
// }

// const prismaPlugin = fp(async (fastify) => {
//   const adapter = new PrismaBetterSqlite3({
//     url: process.env.DATABASE_URL ?? "file:./dev.db",
//   });

//   const prisma = new PrismaClient({
//     adapter,
//   });

//   await prisma.$connect();

//   fastify.decorate("prisma", prisma);

//   fastify.addHook("onClose", async () => {
//     await prisma.$disconnect();
//   });
// });

// export default prismaPlugin;
