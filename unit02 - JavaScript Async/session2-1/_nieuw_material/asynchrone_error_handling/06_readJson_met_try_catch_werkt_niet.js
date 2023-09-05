const fs = require("fs");

const readJson = (fileName, done) => {
  fs.readFile(fileName, (err, data) => {
    if (err) return done(err, null);

    const contents = JSON.parse(data);
    done(null, contents);
  });
};

readJson("_index.json", (err, fileList) => {
  if (err) {
    console.log("Something went wrong");
    console.log(err.message);
    return;
  }

  //
  // STEP 2a
  // uncomment `try...catch` block to catch the synchronous error
  //
  // try {

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

  //
  // STEP 2b
  // uncomment `try...catch` block to catch the synchronous error
  //
  // } catch (err) {
  //   console.log("Something went wrong");
  //   console.log(err.message);
  // }
});
