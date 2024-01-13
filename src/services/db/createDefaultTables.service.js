const tableDB = require("./table.db.service");
const logger = require("./../../../config/logger.config");

const tables = [
   {
      name: "users",
      primary_key: "user_ID",
   },
   {
      name: "sessions",
      primary_key: "session_ID",
   },
   {
      name: "exams",
      primary_key: "exam_ID",
   },
   {
      name: "questions",
      primary_key: "question_ID",
   },
   {
      name: "exam_attempt_records",
      primary_key: "attempt_ID",
   },
];

const createDefaultTables = async () => {
   for (let i = 0; i < tables.length; ++i) {
      if (await tableDB.doesTableExist(tables[i]["name"])) continue;

      tableDB.createTable(tables[i]["name"], tables[i]["primary_key"]);
   }
};

createDefaultTables().then();
