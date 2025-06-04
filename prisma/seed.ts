import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const articles = [
  {
    title: "Artemis",
    slug: "artemis",
    content: "Artemis is the goddess of the hunt..." // Add your article body here!
  },
  // Add more articles!
];

async function main() {
  for (const article of articles) {
    await prisma.article.upsert({
      where: { slug: article.slug },
      update: {},
      create: article,
    });
  }
}
main().then(() => prisma.$disconnect());