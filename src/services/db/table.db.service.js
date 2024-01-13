const dynamodb_client = require("../../../config/db.config");
const logger = require("../../../config/logger.config");
const {
   DescribeTableCommand,
   CreateTableCommand,
   DeleteTableCommand,
} = require("@aws-sdk/client-dynamodb");

const doesTableExist = async (table_name) => {
   const command = new DescribeTableCommand({
      TableName: table_name,
   });

   logger.info("doesTableExist func call", { table_name });

   try {
      let res = await dynamodb_client.send(command);
      logger.info("", { "table name": res.Table.TableName });
      logger.info("", { "item count": res.Table.ItemCount });
      return true;
   } catch (error) {
      logger.warn("", { error });
      logger.warn("Table doesn't exist:", { table_name });
      return false;
   }
};

const createTable = async (table_name, primary_key) => {
   const command = new CreateTableCommand({
      TableName: table_name,
      BillingMode: "PAY_PER_REQUEST",
      AttributeDefinitions: [
         {
            AttributeName: primary_key,
            AttributeType: "S",
         },
      ],
      KeySchema: [
         {
            AttributeName: primary_key,
            KeyType: "HASH",
         },
      ],
   });

   logger.info("createTable func call", { table_name });

   try {
      await dynamodb_client.send(command);
      logger.info("Table created");
      return true;
   } catch (error) {
      logger.warn("Table creation failed");
      logger.warn("", { error });
      return false;
   }
};

const deleteTable = async (table_name) => {
   const command = new DeleteTableCommand({
      TableName: table_name,
   });

   logger.info("deleteTable func call", { table_name });

   try {
      await dynamodb_client.send(command);
      logger.info("Table deleted");
      return true;
   } catch (error) {
      logger.warn("Table deletion failed");
      logger.warn("", { error });
      return false;
   }
};

module.exports = { doesTableExist, createTable, deleteTable };

// doesTableExist("user").then();
// doesTableExist("users").then();

// createTable("users", "user_ID").then();

// deleteTable("users").then();
