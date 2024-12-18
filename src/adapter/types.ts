import { PrismaClient } from '@prisma/client';

export type AdapterParams = {
  db: {
    client: PrismaClient;
    getContextClient: (tx?: unknown) => PrismaClient;
  };
};

export type UnknownTx = unknown;
