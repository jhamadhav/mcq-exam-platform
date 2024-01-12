const path = require("path");
const { createDoc } = require("apidoc");

const createApiDoc = () => {
   let doc = createDoc({
      src: path.resolve(__dirname, "./../src"),
      dest: path.resolve(__dirname, "./../doc"),
   });

   if (typeof doc !== "boolean") {
      console.log(doc.data);
      console.log(doc.project);
   }
};

createApiDoc();
