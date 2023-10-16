const express = require("express");
const mongoose = require("mongoose");
const PORT = 3030;
const app = express();
const todoRoutes = require("./routes/todoRoutes");

app.use(express.json());
mongoose.set("strictQuery", true);

mongoose.connect("mongodb://0.0.0.0/todolist")
    .then(() => console.log("Connected successfully!"))
    .catch((err) => console.error(err));

app.use("/todos/", todoRoutes);
app.listen(PORT, () => {
    console.log("The server is listening on port " + PORT);
});