import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log("request Method: ", req.method);
    console.log("request URL: ", req.url);
    next();
    }

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
