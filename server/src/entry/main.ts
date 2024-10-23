import Fastify from 'fastify'
import { host, port, prefix } from '../../../manager/config/server.json'
import { router } from './router'
import { scheduler } from './scheduler'

const fastify = Fastify()

fastify.register(router, { prefix })
fastify.register(scheduler)

fastify.listen({ host, port })
