import { FastifyInstance, HookHandlerDoneFunction, RouteShorthandOptions } from 'fastify'

export const router = (_: FastifyInstance, __: RouteShorthandOptions, done: HookHandlerDoneFunction): void => {
  done()
}
