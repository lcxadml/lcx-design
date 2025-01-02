import winston from "winston";

const logger = winston.createLogger({
  level: "info", // 你可以设置为 'debug', 'info', 'warn', 'error', 等
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.prettyPrint(),
  ),
  defaultMeta: { service: "Lcx-design" },
  transports: [
    new winston.transports.File({
      filename: "error.log",
      level: "error",
    }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});

export { logger };
