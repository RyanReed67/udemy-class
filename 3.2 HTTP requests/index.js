import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About me</h1><p>My name is Ryan</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact me</h1><p>Phone: 555-555-5555</p>");
});

app.listen(port, () => {
    console.log(`Server has started on port ${port}`);
});