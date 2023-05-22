import { Logger } from 'pino';
import { ILoggerProps, ILoggerConfig, TDefaultObject } from './types';
export declare class ErisLogger {
    config: ILoggerConfig;
    pinoInstance: Logger | undefined;
    defaultParams: TDefaultObject;
    constructor(config: ILoggerConfig, defaultParams?: TDefaultObject);
    private formatDate;
    private formatString;
    setDefaultParams(params: TDefaultObject): TDefaultObject;
    private isTerminalLogger;
    private isFileLogger;
    info(props: Pick<ILoggerProps, 'title' | 'message' | 'params' | 'timestamp'>): void;
    alert(props: Pick<ILoggerProps, 'title' | 'message' | 'params' | 'timestamp'>): void;
    debug(props: Pick<ILoggerProps, 'title' | 'message' | 'params' | 'timestamp'>): void;
    warning(props: ILoggerProps): void;
    error(props: ILoggerProps): void;
    critical(props: ILoggerProps): void;
}
