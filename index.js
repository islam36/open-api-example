const express = require("express");
const swaggerUI = require("swagger-ui-express");
const docs = require("./openapi-docs.json");



const app = express();
app.get("/", (req, res) => {
    return res.send("hello world");
});

app.use("/docs", swaggerUI.serve, swaggerUI.setup(docs));


app.listen(8000, () => {
    console.log("app running on localhost:8000");
})