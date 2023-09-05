const fs = require('fs');


const readJson = (fileName, done) => {
    fs.readFile(fileName, (_, data) => {
        const contents = JSON.parse(data);
        done(contents);
    });
};

try {
    readJson('_index.json', fileList => {
        readJson(fileList.important, fileContents => {
            console.log(fileContents);
        });
    });
} catch (err) {
    console.log("Something went wrong");
    console.log(err.message);
}

