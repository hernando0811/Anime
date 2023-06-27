const Sequelize = require("sequelize");


//connect to the anime database 
//this db variable represents the connection to my postgress database
const db = new Sequelize('postgres://localhost:5432/anime')

//I need to export db so other files can recognize and see   db 
module.exports = db