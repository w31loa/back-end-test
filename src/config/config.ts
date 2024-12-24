import path from 'path'
import fs from 'fs'
import YAML from 'yaml'
import { z } from 'zod';

const configSchema = z.object({
  http: z.object({
    host: z.string(),
    port: z.number()
  }),
  postgres: z.object({
    host: z.string(),
    port: z.number(),
    user: z.string(),
    password: z.string(),
    db: z.string()
  }),
  jwt: z.object({
    secret: z.string()
  }),
  file: z.object({
    patch: z.string()
  })
})

export type Config = z.infer<typeof configSchema>;

const defaultConfigPath = 'config/config.yml'

const parseConfig = (): Config => {
  const configAbsPath = path.resolve(process.cwd(), defaultConfigPath)

  const file = fs.readFileSync(configAbsPath, 'utf-8')

  const config: Config = YAML.parse(file)


  const result = configSchema.safeParse(config);

  if (!result.success) {
    throw new Error(JSON.stringify(result.error));
  }

  return result.data;
}

export const config = parseConfig()

export const devMode = process.env.NODE_ENV === 'development';
