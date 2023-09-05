fs = require("fs");
path = require("path");

// Get an array of all files in the folder: 'accounts' using fs.readdir
// Log the contents of the last file in the list to the console using fs.readFile

fs.readdir("accounts", (err, fileList) => {
  if (err) {
    console.error(`[OOPS] ${err.message}`);
    return;
  }

  const file = path.join("accounts", fileList[fileList.length - 1]);
  fs.readFile(file, (err, data) => {
    console.log(data.toString());
  });
});
