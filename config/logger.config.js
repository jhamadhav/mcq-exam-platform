const winston = require("winston");
const dotenv = require("dotenv").config();

const logger = winston.createLogger({
   format: winston.format.combine(
      winston.format.timestamp({
         format: "YYYY-MM-DD HH:mm:ss",
      }),
      winston.format.json()
   ),
   transports: [
      new winston.transports.File({
         filename: "system_logs.log",
      }),
   ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== "production") {
   logger.add(
      new winston.transports.Console({
         format: winston.format.simple(),
      })
   );
}

module.exports = logger;
