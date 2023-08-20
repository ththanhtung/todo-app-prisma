import { PrismaClient } from "@prisma/client";

const GlobalPrismaClient = global as unknown as {prisma: PrismaClient}

export const prisma = GlobalPrismaClient.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
    GlobalPrismaClient.prisma = prisma
}

export default prisma