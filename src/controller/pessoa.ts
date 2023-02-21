import { Pessoa } from "@prisma/client";
import { prisma } from "../lib/prisma";
import { PessoaDtoInputSchema } from "../schema/pessoa";


export async function getAllPessoas()
{
    try
    {
        const pessoas = await prisma.pessoa.findMany()

        return pessoas
    }
    catch(err)
    {
        throw new Error("Erro ao encontrar usuários.")
    }
}

export async function getPessoaById(id: number)
{
    try
    {
        const pessoa = await prisma.pessoa.findUnique({
            where:{
                Id: id
            }
        })

        return pessoa
    }
    catch(err)
    {
        throw err
    }
}

export async function postPessoa(
    data: PessoaDtoInputSchema
)
{
    try
    {
        const newPessoa = await prisma.pessoa.create({
            data: {
                Nome: data.nome,
                Apelido: data.apelido,
                Celular: data.celular
            }
        });

        return newPessoa
    }
    catch(err)
    {
        throw new Error("Erro ao inserir novo usuário.")
    }
}

