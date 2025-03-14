import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'

export async function transactionRoutes(app: FastifyInstance) {
    app.post('/', async (request, reply) => {
        const createTransactionBodySchema = z.object({
            title: z.string(),
            amount: z.number(),
            type: z.enum(['debito', 'credito']),
        })
        const body = createTransactionBodySchema.parse(request.body)

        const { amount, title, type } = body

        await knex('transactions').insert({
            id: randomUUID(),
            title,
            amount: type === 'credito' ? amount : -1 * amount,
        })

        return reply.status(201).send()
    })
}
