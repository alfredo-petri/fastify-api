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

    app.get('/balance', async () => {
        const balance = await knex('transactions').sum('amount', {
            as: 'balance',
        })

        return { balance }
    })

    app.post('/', async (request, reply) => {
        const createTransactionBodySchema = z.object({
            title: z.string(),
            amount: z.number(),
            type: z.enum(['debit', 'credit']),
        })
        const body = createTransactionBodySchema.parse(request.body)

        const { amount, title, type } = body

        let sessionId = request.cookies.sessionId

        if (!sessionId) {
            sessionId = randomUUID()
            reply.cookie('sessionId', sessionId, {
                path: '/',
                maxAge: 60 * 60 * 24 * 30, // 30 dias
            })
        }

        await knex('transactions').insert({
            id: randomUUID(),
            title,
            amount: type === 'credit' ? amount : -1 * amount,
            session_id: sessionId,
        })

        return reply.status(201).send()
    })

    app.delete('/', async (request, reply) => {
        await knex('transactions').delete()

        return reply.status(204).send()
    })
}
