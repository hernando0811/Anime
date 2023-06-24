// in this file I want to define my postgress tables 

const Sequelize = require('sequelize');
const db = require('./db.js')


const animeShows = db.define('animeshows', {

    name:{
        type: Sequelize.STRING,
        allowNull:false
    },
    creator:{
        type: Sequelize.STRING,
        allowNull:false
    },
    characters:{
        type: Sequelize.STRING,
        allowNull: false
    },
    seasons:{
        type: Sequelize.INTEGER,
        allowNull:false

    },
    imageUrl:{
        type: Sequelize.DataTypes.STRING,
        allowNull:false 
    }
})

module.exports = {
    animeShows
}