const express = require("express");
const { todo } = require("./db");
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({
        msg : "This is a message in response to a successful GET request"
    })
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})

module.exports = app;