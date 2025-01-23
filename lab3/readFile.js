
const fs = require('fs');

// Get the file name from the command line arguments
const fileName = process.argv[2];

if (!fileName) {
    console.log("Please provide a file name as a parameter.");
    process.exit(1);
}

fs.readFile(fileName, 'utf-8', (err, data) => {
    if (err) {
        console.error(`Error reading file: ${err.message}`);
    } else {
        console.log(data);
    }
});
