const express = require("express");
const PORT = 3030;
const app = express();
const todoRoutes = require("./routes/todoRoutes");


app.use("/todo/", todoRoutes);
app.listen(PORT, () => {
    console.log("The server is listening on port " + PORT);
});