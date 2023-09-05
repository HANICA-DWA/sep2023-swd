const fs = require('fs');

readJsonSync = (fileName) => {
    const data = fs.readFileSync(fileName);
    return JSON.parse(data);
}

try {
    const fileList = readJsonSync('_index.json');
    const fileContents = readJsonSync(fileList.important);
    console.log(fileContents);
} catch (err) {
    console.log("Something went wrong");
    console.log(err.message);
}



