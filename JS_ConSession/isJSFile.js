function isJavaScriptFile(fileName) {
    if (fileName.endsWith('.js')) {
        return true;
    } else {
        return false;
    }
}

const givenFile = isJavaScriptFile("app.js");
console.log("Given File is js file?" ,givenFile);