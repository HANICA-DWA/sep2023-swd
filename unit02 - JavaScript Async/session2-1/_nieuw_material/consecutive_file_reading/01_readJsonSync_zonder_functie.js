const fs = require("fs");

data = fs.readFileSync("_index.json");
const fileList = JSON.parse(data);
// console.log("[LOG]", fileList);

data = fs.readFileSync(fileList.important);
const fileContents = JSON.parse(data);
// console.log("[LOG]", fileContents);

console.log(fileContents.data);
