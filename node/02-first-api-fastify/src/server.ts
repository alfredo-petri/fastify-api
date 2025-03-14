import fastify from 'fastify'
// import crypto from 'node:crypto'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
    const transaction = await knex('transactions')
        .where('amount', 1250)
        .select('*')
    // .insert({
    //     id: crypto.randomUUID(),
    //     title: 'transação de teste 2',
    //     amount: 1250,
    // })
    // .returning('*')
    return transaction
})

app.listen({
    port: env.PORT,
}).then(() => {
    console.log('HTTP Server running at port ' + env.PORT)
})
