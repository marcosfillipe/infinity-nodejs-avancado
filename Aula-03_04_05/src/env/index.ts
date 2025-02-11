import 'dotenv/config'
import { z } from 'zod'

const schemaEnv = z.object({
    NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
    PORT: z.coerce.number().default(3000)
})

const _env = schemaEnv.safeParse(process.env)

if(_env.success === false) {
    console.error(_env.error.format())
    throw new Error ('Invalid envirioment')
}

export const env = _env.data