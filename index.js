const fs = require("fs"); //Import module to perform operations on file system

//To read the file
fs.readFile("source.txt", "utf-8", (error, data) => {
  if (error) {
    console.log("Error:", error);
    return;
  }
  //To add the data into file
  fs.appendFile("target.txt", data, (error) => {
    if (error) {
      console.log("appendFile error:", error);
      return;
    }
    fs.readFile("target.txt", "utf-8", (error, data) => {
      if (error) {
        console.log("Error:", error);
      }
      console.log("Data from target.txt", data);
    });
  });
});
