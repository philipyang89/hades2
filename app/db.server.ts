import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

declare global {
  var prisma: PrismaClient | undefined;
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  // Prevents multiple client instances in dev
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;