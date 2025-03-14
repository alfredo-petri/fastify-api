import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'

export async function transactionRoutes(app: FastifyInstance) {
    app.get('/', async () => {
        const transactions = await knex('transactions').select()

        return {
            transactions,
        }
    })

    app.get('/:id', async (request) => {
        const getTransactionParamsSchema = z.object({
            id: z.string().uuid(),
        })

        const { id } = getTransactionParamsSchema.parse(request.params)

        const transaction = await knex('transactions').where('id', id).first()

        return transaction
    })

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
