const express = require('express');
const router = express.Router();
const {animeShows} = require('../db/index.js');


router.get('/', async (req, res, next) => {
try {
    const allAnime = await animeShows.findAll()
    res.send(allAnime);

    
} catch (error) {
    next(error);
}

})


module.exports = router
