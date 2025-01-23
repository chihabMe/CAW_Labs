
const fs = require('fs');

// Get the file name and text from the command line arguments
const [fileName, ...textParts] = process.argv.slice(2);
const text = textParts.join(" ");

if (!fileName || !text) {
    console.log("Usage: node exo4.js <file_name> <text>");
    process.exit(1);
}

// Step 1: Write text to the specified file
fs.writeFile(fileName, text, (err) => {
    if (err) {
        console.error(`Error writing file: ${err.message}`);
    } else {
        console.log(`The file ${fileName} has been saved!`);

        // Step 2: Read the file and display its content
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if (err) {
                console.error(`Error reading file: ${err.message}`);
            } else {
                console.log("File content:");
                console.log(data);
            }
        });
    }
});

