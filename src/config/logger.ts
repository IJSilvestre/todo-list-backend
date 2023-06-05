import winston from "winston";
import config from "config";

const levels = {
  error: 0,
  warn: 1,
  info: 3,
  http: 4,
  debug: 5,
};

const colors = {
  error: "red",
  warn: "yellow",
  info: "green",
  http: "magenta",
  debug: "white",
};
const level = () => {
  const environment = "development";
  const isDevelopment = environment === "development";
  return isDevelopment ? "debug" : "warn";
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: "MM-DD-YYYY HH:MM:SS:MS" }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} - ${info.level}: ${info.message}`
  )
);

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: "logs/error.log",
    level: "error",
  }),
  //new winston.transports.File({ filename: "logs/all.log" }),
];
const Logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

export default Logger;
