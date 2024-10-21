import Fastify from 'fastify'
import { host, port, prefix } from '../../../manager/config/server.json'
import { router } from './router'

const fastify = Fastify()

fastify.register(router, { prefix })
fastify.listen({ host, port })
