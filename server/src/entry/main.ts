import { config } from '@shared/libs'
import Fastify from 'fastify'
import { router } from './router'

const fastify = Fastify()
const { prefix, host, port } = config

fastify.register(router, { prefix })
fastify.listen({ host, port })
