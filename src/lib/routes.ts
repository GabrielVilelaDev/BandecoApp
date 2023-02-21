import { FastifyInstance } from "fastify";
import { prisma } from "./prisma";
import { z } from "zod";
import { getAllPessoas, getPessoaById, postPessoa } from "../controller/pessoa";
import { Pessoa } from "@prisma/client";
import { pessoaDtoInputSchema } from "../schema/pessoa";



export async function appRoutes(app: FastifyInstance) 
{
    
    app.get('/usuario', async (request, reply) => {

        try
        {
            const pessoas = await getAllPessoas()

            if (!pessoas) {
                return reply.code(401).send({
                message: "Nenhum usuário cadastrado.",
                });
            }

            reply.send(pessoas)
        }
        catch (error)
        {
            //Returns error status code when an error occurs in the process of get a entity.
            reply.code(500).send({ error: 'Erro ao encontrar usuário.' });
        }
    })

    app.get('/usuario/:usuarioId', async (request, reply) => {

        try
        {
            const usuarioId = request.params as number
            const pessoa = await getPessoaById(usuarioId)

            if (!pessoa) {
                return reply.code(401).send({
                message: "Usuário não encontrado.",
                });
            }
            reply.send(pessoa)
        }
        catch (error)
        {
            //Returns error status code when an error occurs in the process of get a entity.
            reply.code(500).send(error)//send({ error: 'Erro ao encontrar usuários.' });
        }
    })

    app.post('/usuario', async (request, reply) => {
        try 
        {
            //Creates a Data Transfer Object(dto) of 'Pessoa' to insert into the database.
            const pessoaDto = pessoaDtoInputSchema.parse(request.body)
            
            //Insert Pessoa entity in the database.
            const newPessoa = await postPessoa(pessoaDto)

            //Returns sucess status code when entity has been created with no errors.
            reply.code(201).send(newPessoa);
        }
        catch (error) 
        {
            //Returns error status code when an error occurs in the process of adding a new entity.
            reply.code(500).send({ error: 'Não foi possível adicionar novo usuário.' });
        }
    })
}

