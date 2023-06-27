// in this file I want to define my postgress tables 

const Sequelize = require('sequelize');
const db = require('./db.js')


const animeShows = db.define('animeshows', {

    name:{
        type: Sequelize.STRING,
        allowNull:false
    },
    creator:{
        type: Sequelize.STRING
        
    },
    characters:{
        type: Sequelize.STRING
        
    },
    seasons:{
        type: Sequelize.INTEGER
        

    },
    imageUrl:{
        type: Sequelize.DataTypes.STRING
    
    }
})

module.exports = 
    animeShows
