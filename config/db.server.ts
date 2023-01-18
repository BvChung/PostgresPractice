import { PrismaClient } from "@prisma/client";

let database: PrismaClient;

declare global {
	var __db: PrismaClient | undefined;
}

if (!globalThis.__db) {
	globalThis.__db = new PrismaClient();
}

database = globalThis.__db;

export { database };
