const fspromise = require('fs/promises');  // Correct import path

// Async function to read a file
const read = async () => {
    try {
        const data = await fspromise.readFile("./data.txt", "utf-8");
        console.log(data);
    } catch (error) {
        console.error("Error reading file:", error.message);
    }
};

// Async function to write to a file
const write = async () => {
    try {
        await fspromise.writeFile("./data2.txt", "My name is Shivani", "utf-8");
        console.log("File written successfully!");
    } catch (error) {
        console.error("Error writing file:", error.message);
    }
};

// Call functions
read();
write();

// Export the read function if needed in another module
module.exports = read;

// Optional logs (uncomment if needed)
// console.log("1st");
// console.log("2nd");
// console.log("3rd");
// console.log("4th");
