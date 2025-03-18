import { FastifyInstance } from 'fastify'
import { registerAddress } from '../controllers/registerAddress'
import { register } from '../controllers/register'
import { profile } from '../controllers/profile'
import { verifyJWT } from '../middleware/verify-jwt'
import { authenticate } from '../controllers/authenticate'
import { fetchUsers } from '../controllers/fetch-users'

export async function userRoutes (app: FastifyInstance){
    app.post('/user/save', register)
    app.post('/user/address/save', registerAddress)
    app.post('/sessions', authenticate)
    app.get('/users/all', fetchUsers)
    app.get('/me',{onRequest: verifyJWT }, profile)
}