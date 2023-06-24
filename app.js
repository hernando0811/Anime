const express = require("express");
const morgan = require("morgan");
PORT = 3000;

const app = express();

app.use(morgan("tiny"));

app.listen(3000, ()=>{
    console.log(`started listening on port:${PORT}`)
})