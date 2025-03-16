import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { checkSessionIdExists } from '../middlewares/check-session-id-exists'

export async function transactionRoutes(app: FastifyInstance) {
    app.get('/', { preHandler: [checkSessionIdExists] }, async (request) => {
        const { sessionId } = request.cookies
        const transactions = await knex('transactions')
            .select()
            .where('session_id', sessionId)

        return { transactions }
    })

    app.get('/:id', { preHandler: [checkSessionIdExists] }, async (request) => {
        const { sessionId } = request.cookies

        const getTransactionParamsSchema = z.object({
            id: z.string().uuid(),
        })

        const { id } = getTransactionParamsSchema.parse(request.params)

        const transaction = await knex('transactions')
            .where({
                id,
                session_id: sessionId,
            })
            .first()

        return { transaction }
    })

    app.get(
        '/balance',
        { preHandler: [checkSessionIdExists] },
        async (request) => {
            const { sessionId } = request.cookies
            const balance = await knex('transactions')
                .where({ session_id: sessionId })
                .sum('amount', {
                    as: 'amount',
                })
                .first()

            return { balance }
        },
    )

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
