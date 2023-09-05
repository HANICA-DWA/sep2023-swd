const fs = require("fs");

const readJson = (fileName, done) => {
  fs.readFile(fileName, (err, data) => {
    if (err) return done(err, null);

    //
    // Notice how the `try...catch` is moved up here in this function
    //
    try {
      const contents = JSON.parse(data);
      return done(null, contents);
    } catch (jsonError) {
      return done(jsonError, null);
    }
  });
};

readJson("_index.json", (err, fileList) => {
  if (err) {
    console.log("Something went wrong");
    console.log(err.message);
    return;
  }

  //
  // STEP 1.
  // uncomment / use line below to see an error happen in synchronous code.
  //
  // readJson(fileList.NON_EXISTING_PROPERTY, (err, fileContents) => {
  readJson(fileList.important, (err, fileContents) => {
    if (err) {
      console.log("Something went wrong");
      console.log(err.message);
      return;
    }

    console.log(fileContents);
  });
});
