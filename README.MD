# ErisLogger 

* [About](#about-package)
* [Installation](#installation)
* [Example](#example)
* - [General concepts](#general-concepts)
* - [Terminal](#terminal)
* - [File](#file)
* - [Methods](#methods)

## About package

ErisLogger is a logging tool that makes life easier. 
It has under the hood a [pino](https://www.npmjs.com/package/pino) package for writing logs to a file 
as well as tools for console logging.

##  Installation

```shell
npm i eris-logger
```

## Example

### General concepts

The default settings create a logger that will write to the terminal and file.
The logger also includes the following settings:

- Terminal Settings
- File settings
- Date format
- Logging level

```js
const logger = new ErisLogger({
  terminal: { ... },
  file: { ... },
  options: {},
});
```

Logging levels can be different: for example,
one configuration can be configured for a terminal,
another for a file, or you can set a global one for all.

How it looks like:

```js
const logger = new ErisLogger({
  terminal: {
    use: true,
    levels: ['info', 'debug']
  },
  file: {
    use: true,
    levels: ['warning', 'error', 'critical']
  },
});
```

Or global: 

```js
const logger = new ErisLogger({
  options: {
    levels: ['info', 'alert', 'debug', 'warning', 'error', 'critical']
  },
});
```

### Terminal

To begin with, let's create an instance of the ErisLogger class,
after which we indicate that we need to output logs in the terminal.

```js
const logger = new ErisLogger({ terminal: { use: true } });
```

This is how the default settings look like:

```js
const terminalConfig = {
  use: true,
  colors: {
    info: 'greenBright',
    alert: 'blueBright',
    debug: 'blackBright',
    warning: 'yellow',
    error: 'redBright',
    critical: 'bgRed',
  },
  levels: ['info', 'alert', 'debug', 'warning', 'error', 'critical'],
};


const logger = new ErisLogger({ terminal: terminalConfig });
```

List of all available colors:

```ts
export type TTerminalColors = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';
export type TTerminalBgColors = 'bgBlack' | 'bgRed' | 'bgGreen' | 'bgYellow' | 'bgBlue' | 'bgMagenta' | 'bgCyan' | 'bgWhite';

export type TTerminalBrightColors =  | 'blackBright'  | 'redBright'  | 'greenBright'  | 'yellowBright'  | 'blueBright'  | 'magentaBright'  | 'cyanBright'  | 'whiteBright';
export type TTerminalBgBrightColors =  | 'bgBlackBright'  | 'bgRedBright'  | 'bgGreenBright'  | 'bgYellowBright'  | 'bgBlueBright'  | 'bgMagentaBright'  | 'bgCyanBright'  | 'bgWhiteBright';
```

### File

To begin with, let's create an instance of the ErisLogger class,
after which we indicate that we need to output logs in the file.

```js
const logger = new ErisLogger({ file: { use: true } });
```

This is how the default settings look like:

```js
const fileConfig = {
  use: true,
  dir: '/logs/log.log',
  colorize: true,
  levels: ['info', 'alert', 'debug', 'warning', 'error', 'critical'],
};


const logger = new ErisLogger({ file: fileConfig });
```

### Methods

```ts
// Info log
logger.info('info message', { data: [] });

// Alert log
logger.alert('alert message', { data: [] });

// Debug log
logger.debug('debug message', { data: [] });

// Warning log
logger.warning('warning message', { data: [] });

// Error log
logger.error('error message', new Error('error'), { data: [] });

// Critical log
logger.critical('critical message', new Error('error'), { data: [] });
```
