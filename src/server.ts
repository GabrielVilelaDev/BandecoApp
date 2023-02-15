// ESM
import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client';

const app = Fastify({
  logger: true
});

const prisma = new PrismaClient()

// Declare a route
app.get('/', async (request, reply) => {

  const pessoas = await prisma.pessoa.findFirst()
  reply.send(pessoas)
})

// Run the server!
app.listen({ port: 3000 }, function (err, address) {
  if (err) {
    app.log.error(err)
    //process.exit(1)
  }
})