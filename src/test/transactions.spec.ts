import {
    test,
    beforeAll,
    afterAll,
    describe,
    it,
    expect,
    beforeEach,
} from 'vitest'
import request from 'supertest'
import { app } from '../app'
import { execSync } from 'node:child_process'

describe('Transactions routes', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    beforeEach(() => {
        execSync('npm run knex migrate:rollback -all')
        execSync('npm run knex migrate:latest')
    })

    test('testing if user can create a new transaction', async () => {
        await request(app.server)
            .post('/transactions')
            .send({
                title: 'new transaction',
                amount: 5000,
                type: 'credit',
            })
            .expect(201)
    })

    it('should be able to list all transactions', async () => {
        const createTransactionResponse = await request(app.server)
            .post('/transactions')
            .send({
                title: 'new transaction',
                amount: 5000,
                type: 'credit',
            })

        const cookies = createTransactionResponse.get('Set-Cookie')

        if (!cookies) {
            throw new Error(
                'Nenhum cookie foi retornado na resposta da transação.',
            )
        }

        const listTransactionsResponse = await request(app.server)
            .get('/transactions')
            .set('Cookie', cookies)
            .expect(200)

        expect(listTransactionsResponse.body.transactions).toEqual([
            expect.objectContaining({
                title: 'new transaction',
                amount: 5000,
            }),
        ])
    })

    it('should be able to list a specific transaction', async () => {
        const createTransactionResponse = await request(app.server)
            .post('/transactions')
            .send({
                title: 'new transaction',
                amount: 5000,
                type: 'credit',
            })

        const cookies = createTransactionResponse.get('Set-Cookie')

        if (!cookies) {
            throw new Error(
                'Nenhum cookie foi retornado na resposta da transação.',
            )
        }

        const listTransactionsResponse = await request(app.server)
            .get('/transactions')
            .set('Cookie', cookies)
            .expect(200)

        const transactionId = listTransactionsResponse.body.transactions[0].id

        const getSpecificTransactionResponse = await request(app.server)
            .get(`/transactions/${transactionId}`)
            .set('Cookie', cookies)
            .expect(200)

        expect(getSpecificTransactionResponse.body.transaction).toEqual(
            expect.objectContaining({
                title: 'new transaction',
                amount: 5000,
            }),
        )
    })

    it('should be able to get account balance', async () => {
        const createTransactionResponse = await request(app.server)
            .post('/transactions')
            .send({
                title: 'new credit transaction',
                amount: 5000,
                type: 'credit',
            })

        const cookies = createTransactionResponse.get('Set-Cookie')

        if (!cookies) {
            throw new Error(
                'Nenhum cookie foi retornado na resposta da transação.',
            )
        }

        await request(app.server)
            .post('/transactions')
            .set('Cookie', cookies)
            .send({
                title: 'new debit transaction',
                amount: 2000,
                type: 'debit',
            })

        const accountBalanceResponse = await request(app.server)
            .get('/transactions/balance')
            .set('Cookie', cookies)
            .expect(200)

        expect(accountBalanceResponse.body.balance).toEqual(
            expect.objectContaining({
                amount: 3000,
            }),
        )
    })
})
