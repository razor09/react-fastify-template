import { ProxyConfigArray } from 'webpack-dev-server'
import { apps } from '../../manager/config/ecosystem.json'
import * as config from '../../manager/config/server.json'
import { Args } from './typings'

const [_, client] = apps

export const host = client.env.PM2_SERVE_HOST
export const port = client.env.PM2_SERVE_PORT

const origin = `${config.protocol}://${config.host}:${config.port}`
const baseUrl = config.prefix
const href = origin.concat(baseUrl)

export const getIsDevelopment = (args: Args): boolean => {
  return args.mode === 'development'
}

export const getIsProduction = (args: Args): boolean => {
  return args.mode === 'production'
}

export const getBaseUrl = (args: Args): string => {
  return getIsDevelopment(args) ? baseUrl : href
}

export const proxy: ProxyConfigArray = [
  {
    context: baseUrl,
    target: href,
  },
]
