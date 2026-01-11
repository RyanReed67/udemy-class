const fs = require("fs");

//fs.writeFile("example.txt", "hello, world!", (err) => {
//    if (err) throw err;
//    console.log("File has been saved!");
//});

fs.readFile("./example.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
}); 