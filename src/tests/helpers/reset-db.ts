import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export default async()=>{
    await prismaClient.$transaction([
        prismaClient.request.deleteMany(),
    ])
}