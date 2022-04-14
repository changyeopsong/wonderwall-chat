import winston from 'winston';

import {Env} from 'Constants';

export default winston.createLogger({
    transports: [
        new winston.transports.Console({
            level: 'info',
            format: Env.isProd
                ? winston.format.combine(
                      winston.format(() => false)(),
                      winston.format(() => {
                          throw new Error('Never reached');
                      })()
                  )
                : winston.format.combine(
                      winston.format.colorize(),
                      winston.format.timestamp(),
                      winston.format.printf(({level, message, timestamp}) => `${timestamp} ${level}: ${message}`)
                  )
        })
    ]
});
