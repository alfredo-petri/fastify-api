import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
    NODE_ENV: z
        .enum(['development', 'production', 'test'])
        .default('production'),
    DATABASE_URL: z.string(),
    PORT: z.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
    console.error('invalid enviroment variables:', _env.error.format())
    console.log('')
    throw new Error('invalid enviroment variables')
}

export const env = _env.data
