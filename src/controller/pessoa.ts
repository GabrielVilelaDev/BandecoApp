import { Pessoa, Prisma } from "@prisma/client";
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

export async function getPessoaById(id: string)
{
    try
    {
        const pessoa = await prisma.pessoa.findUnique({
            where:{
                Id: parseInt(id, 10)
            }
        })

        return pessoa
    }
    catch(err)
    {
        throw new Error("Erro ao encontrar usuário.")
    }
}

export async function postPessoa(data: PessoaDtoInputSchema)
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

export async function putPessoaById(id: string, data: PessoaDtoInputSchema)
{
    try
    {
        const pessoa = await prisma.pessoa.update({
            where:{
                Id: parseInt(id, 10)
            },
            data: {
                Nome: data.nome,
                Apelido: data.apelido,
                Celular: data.celular
            }
        });

        return pessoa
    }
    catch(err)
    {
        throw new Error("Erro ao atualizar cadastro de usuário.")
    }
}

export async function deletePessoaById(id: string)
{
    try
    {
        const pessoa = await prisma.pessoa.delete({
            where:{
                Id: parseInt(id, 10)
            }
        })

        return pessoa
    }
    catch(err)
    {
        throw new Error("Erro ao excluir cadastro de usuário.")
    }
}