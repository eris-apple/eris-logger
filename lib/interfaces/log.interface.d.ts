export declare enum LogLevel {
    Debug = "debug",
    Info = "info",
    Alert = "alert",
    Warn = "warn",
    Error = "error",
    Fatal = "fatal",
    Unselected = "unselected"
}
export declare const logToInt: (level: LogLevel) => number;
export type LogField = {
    [key: string]: any;
};
export interface LogData {
    fields?: LogField;
    error?: Error;
    name?: string;
    withName?: boolean;
}
export declare class Log {
    level: LogLevel;
    message: string;
    data?: LogData;
    constructor(level: LogLevel, message: string, data?: LogData);
    isEnabled(level: LogLevel): boolean;
}
export declare const newDefaultLog: (level: LogLevel, ...message: string[]) => Log;
