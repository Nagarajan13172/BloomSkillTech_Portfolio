import pino from 'pino'

const isDev = process.env.NODE_ENV !== 'production'

// One shared logger for the whole server.
//   - dev:  human-readable, colourised lines via pino-pretty (a devDependency)
//   - prod: one JSON object per line on stdout — Docker captures it, and any
//           aggregator (Loki, CloudWatch, Datadog…) can parse it as-is.
// Set LOG_LEVEL=debug|info|warn|error in the environment to tune verbosity.
export const logger = pino({
  level: process.env.LOG_LEVEL || (isDev ? 'debug' : 'info'),
  transport: isDev
    ? {
        target: 'pino-pretty',
        options: { colorize: true, translateTime: 'SYS:HH:MM:ss', ignore: 'pid,hostname' },
      }
    : undefined,
  // Belt-and-braces: never let a credential leak into a log line.
  redact: {
    paths: [
      'req.headers.authorization',
      'req.headers.cookie',
      'SMTP_PASS',
      '*.SMTP_PASS',
      'pass',
      '*.pass',
    ],
    censor: '[redacted]',
  },
})
