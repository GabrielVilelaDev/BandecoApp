// ESM
import Fastify from 'fastify'
import { prisma } from './lib/prisma';
import { appRoutes } from './lib/routes';

const app = Fastify({
  logger: true
});

app.register(appRoutes)

app.listen({ port: 8080 }, function async (err, address) {
  if (err) {
    app.log.error(err)
  }
})