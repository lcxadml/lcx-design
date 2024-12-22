const winston = require("winston");

const logger = winston.createLogger({
  level: "info", // 你可以设置为 'debug', 'info', 'warn', 'error', 等
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.prettyPrint()
  ),
  defaultMeta: { service: "Docs-api-trigger" },
  transports: [
    new winston.transports.File({
      filename: "error.log",
      level: "error",
    }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

export { logger };
