const dotenv = require("dotenv").config();
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const logger = require("./logger.config");

let dynamodb_client = null;
try {
   dynamodb_client = new DynamoDBClient({
      credentials: {
         accessKeyId: process.env.AWS_ACCESS_KEY_ID,
         secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
      region: process.env.AWS_REGION,
   });

   logger.info("dynamo DB connected");
} catch (error) {
   logger.error(error);
}

module.exports = dynamodb_client;
