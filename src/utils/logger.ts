import * as winston from 'winston';
import * as path from 'path';
const { combine, timestamp, label, printf } = winston.format;
import {
  generatorDateTime,
  getTimeVietNamHCM,
} from './share';

const level = () => {
  const env = process.env.STAGE || 'dev';
  const isDevelopment = env === 'dev';
  return isDevelopment ? 'debug' : 'warn';
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};
winston.addColors(colors);

const formatLog = printf(({ label, level, message }) => {
  return `${label} [${level.toUpperCase()}]: ${message}`;
});

const fileName = generatorDateTime();
const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: path.join(__dirname, `../../logs/${fileName}.log`),
    level: level(),
  }),
];

export const log = (method, path, level = 'info', status = 'service', data) => {
  let logLabel;
  if (status !== 'service') {
    logLabel = `[${getTimeVietNamHCM()}] [${status}] [${method} ${path}]`;
  } else {
    logLabel = `[${getTimeVietNamHCM}]`;
  }
  let logger = winston.createLogger({
    format: combine(
      timestamp(),
      winston.format.prettyPrint(),
      winston.format.metadata(),
      winston.format.json(),
      label({ label: logLabel }),
      formatLog
    ),
    transports
  });
  logger.log({
    level: level,
    message: data
  });
  // logger.close();
};
