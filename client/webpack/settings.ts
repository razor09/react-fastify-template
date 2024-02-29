import { config } from '@shared/libs'
import { ProxyConfigArray } from 'webpack-dev-server'
import { apps } from '../../manager/config/ecosystem.json'
import { Args } from './typings'

const [_, client] = apps

export const host = client.env.PM2_SERVE_HOST
export const port = client.env.PM2_SERVE_PORT

const origin = `${config.protocol}://${config.host}:${config.port}`
const prefix = config.prefix
const proxyBaseUrl = prefix || '/'
const href = origin.concat(prefix)

export const isDevelopment = (args: Args): boolean => {
  return args.mode === 'development'
}

export const isProduction = (args: Args): boolean => {
  return args.mode === 'production'
}

export const getBaseUrl = (args: Args): string => {
  return isDevelopment(args) ? prefix : href
}

export const proxyConfigArray: ProxyConfigArray = [
  {
    context: proxyBaseUrl,
    target: origin.concat(proxyBaseUrl),
  },
]
