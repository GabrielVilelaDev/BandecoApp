//Imports a prismaCliente so that this file can "see" all modeling classes.
import { PrismaClient } from '@prisma/client';

//Exports a client of prisma instance to all files in the project.
export const prisma = new PrismaClient()