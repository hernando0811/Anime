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

router.get("/:id", async(req, res, next) => {
    try {
       const singleSHowID = req.params.id

       const singleSHow = await animeShows.findByPk(singleSHowID);

       res.send(singleSHow);
        
    } catch (error) {
        next(error);
        
    }
})

router.post('/', async(req, res, next) => {
    try {
     const {name, creator, characters, seasons, imageUrl} =  req.body
     const newShow = await animeShows.create({
        name: name,
        creator: creator,
        characters: characters,
        seasons: seasons,
        imageUrl: imageUrl
     })

     res.send(newShow);
        
    } catch (error) {
        next(error);
        
    }

})


module.exports = router
