const express = require("express"); // framework that handles http requests at different url paths(routes)
const morgan = require("morgan"); //logging middleware 
PORT = 3000; //the port number we are listeneing to 

const app = express();

app.use(morgan('tiny')); //logging middleware
app.use(express.urlencoded({extended: false})); //this is what is used to parse the body and send in data to the server ("post ")
app.use(require("./api/index"))  

app.listen(3000, ()=>{
    console.log(`started listening on port:${PORT}`)
})