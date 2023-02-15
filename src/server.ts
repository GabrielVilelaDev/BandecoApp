// ESM
import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client';

const app = Fastify({
  logger: true
});

const prisma = new PrismaClient()

app.get('/pessoa', async (request, reply) => {

  const pessoas = await prisma.pessoa.findMany()
  reply.send(pessoas)
})

interface PessoaPayload {
  nome: string;
  apelido: string;
  celular: string;
}

app.post('/pessoa', async (request, reply) => {

  const { nome, apelido, celular } = request.body as PessoaPayload;

  try 
  {
    const novaPessoa = await prisma.pessoa.create({
      data: {
        Nome: nome,
        Apelido: apelido,
        Celular: celular,
      },
    });

    //Retorna status code created ao inserir nova pessoa.
    reply.code(201).send(novaPessoa);
  } 
  catch (error) 
  {
    reply.code(500).send({ error: 'Não foi possível adicionar a pessoa.' });
  }
})


app.get('/veiculo', async (request, reply) => {

  const veiculo = await prisma.veiculo.findMany()
  reply.send(veiculo)
})

app.get('/reserva', async (request, reply) => {

  const reserva = await prisma.reserva.findMany()
  reply.send(reserva)
})

app.listen({ port: 8080 }, function (err, address) {
  if (err) {
    app.log.error(err)
  }
})