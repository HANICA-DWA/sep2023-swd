const fs = require('fs');

const readJson = (fileName, done) => {
    fs.readFile(fileName, (err, data) => {
        if (err) return done(err, null)
        
        const contents = JSON.parse(data);
        done(null, contents);
    });
};

readJson('_index.json', (err, fileList) => {
    if (err) {
        console.log("Something went wrong");
        console.log(err.message);
        return;
    }
    
    readJson(fileList.important, (err, fileContents) => {
        if (err) {
            console.log("Something went wrong");
            console.log(err.message);
            return;
        }
        
        console.log(fileContents);
    });
});

    