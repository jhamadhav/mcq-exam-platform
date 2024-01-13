const dynamodb_client = require("../../../config/db.config");
const { wrap, unwrap } = require("dynamodb-data-types").AttributeValue;
const logger = require("../../../config/logger.config");

const {
   PutItemCommand,
   GetItemCommand,
   UpdateItemCommand,
   DeleteItemCommand,
   ScanCommand,
} = require("@aws-sdk/client-dynamodb");

const createRecord = async (table_name, inp_data) => {
   const input = {
      Item: wrap(inp_data),
      ReturnConsumedCapacity: "TOTAL",
      TableName: table_name,
   };
   const command = new PutItemCommand(input);

   let res_data = { status: "failure", user_ID: null };
   try {
      await dynamodb_client.send(command);

      res_data = { status: "success", user_ID: inp_data.user_id };
      logger.info("Record created", { table_name, inp_data });
   } catch (error) {
      logger.warn("", { error });
      logger.warn("Record creation failed", { table_name, inp_data });
   }
   return res_data;
};

const readRecord = async (table_name, primary_key_name, key_value) => {
   let temp = {};
   temp[primary_key_name] = key_value;

   const command = new GetItemCommand({
      Key: wrap(temp),
      TableName: table_name,
   });

   let res_data = null;
   try {
      let res = await dynamodb_client.send(command);
      res_data = unwrap(res.Item);
      logger.info("Record Fetched");
   } catch (error) {
      logger.warn("", { error });
      logger.warn("Record detch failed");
   }

   return res_data;
};

const deleteRecord = async (table_name, primary_key_name, key_value) => {
   let temp = {};
   temp[primary_key_name] = key_value;

   const command = new DeleteItemCommand({
      TableName: table_name,
      Key: wrap(temp),
   });

   let res_data = { status: "failure" };
   let log_info = { table_name, primary_key_name, key_value };
   try {
      await dynamodb_client.send(command);

      res_data = { status: "success" };
      logger.info("Record deleted", log_info);
   } catch (error) {
      logger.warn("", { error });
      logger.warn("Record deletion failed", log_info);
   }
   return res_data;
};

module.exports = { createRecord, readRecord, deleteRecord };

// createRecord("users", { user_ID: "dev-admin", name: "project devs" }).then();
// readRecord("users", "user_ID", "dev-admin").then((e) => {
//    console.log(e);
// });
// deleteRecord("users", "user_ID", "dev-admin").then();
