import { Logger } from './logger';

import * as winston from 'winston';

/**
 * The class to initialize the SDK logger.
 */
export class SDKLogger {

    private constructor(loggerInstance: Logger) {

        winston.configure({
            level: loggerInstance.getLevel(),

            format: winston.format.combine(
                winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                winston.format.prettyPrint()
            ),

            transports: [
                new winston.transports.File({
                    filename: loggerInstance.getFilePath()
                })
            ]
        });
    }

    /**
     * The method to initialize SDKLogger
     * @param {Logger} logInstance A Logger class instance
     */
    public static initialize(loggerInstance: Logger): SDKLogger {
        return new SDKLogger(loggerInstance);
    }

}