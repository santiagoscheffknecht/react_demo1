const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

const originalPeople = [{ name: "hans" }, { name: "sepp" }, { name: "susi" }];

const updatedPeople = [
    { name: "GZUZ", listeners: 2.9 },
    { name: "BONEZ", listeners: 4.8 },
    { name: "Travis", listeners: 68 },
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/originalPeople", (req, res) => {
    res.send(originalPeople);
});

app.get("/originalPeople/:id", (req, res) => {
    const id = req.params.id;
    res.send(originalPeople[id]);
});

app.delete("/originalPeople/:id", (req, res) => {
    const id = req.params.id;
    originalPeople.splice(id, 1);
    res.send(originalPeople);
});

app.post("/originalPeople", (req, res) => {
    const person = req.body;
    originalPeople.push(person);
    res.send(originalPeople);
});

app.get("/updatedPeople", (req, res) => {
    res.send(updatedPeople);
});

app.get("/updatedPeople/:id", (req, res) => {
    const id = req.params.id;
    res.send(updatedPeople[id]);
});

app.delete("/updatedPeople/:id", (req, res) => {
    const id = req.params.id;
    updatedPeople.splice(id, 1);
    res.send(updatedPeople);
});

app.post("/updatedPeople", (req, res) => {
    const person = req.body;
    updatedPeople.push(person);
    res.send(updatedPeople);
});

app.listen(port, () => {
    console.log("Server running on " + port);
});

