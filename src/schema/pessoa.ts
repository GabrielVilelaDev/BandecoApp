import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

export const pessoaDtoInputSchema = z.object({
    nome: z.string(),
    apelido: z.string(),
    celular: z.string(),
})

export type PessoaDtoInputSchema = z.infer<typeof pessoaDtoInputSchema>;
