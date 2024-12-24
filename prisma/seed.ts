import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Categories
  const categories = [
    { name: 'Функциональность' },
    { name: 'Баг' },
    { name: 'UI' },
    { name: 'Производительность' },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: { name: category.name },
      update: {},
      create: {
        name: category.name,
      },
    });
  }

  console.log('Categories seeded.');

  const statuses = [
    { name: 'Идея' },
    { name: 'Запланировано' },
    { name: 'Выполнено' },
  ];

  for (const status of statuses) {
    await prisma.status.upsert({
      where: { name: status.name },
      update: {}, 
      create: {
        name: status.name,
      },
    });
  }

  console.log('Statuses seeded.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
