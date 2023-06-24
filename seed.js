const {db, animeShows} = require('./db/index.js')

async function syncDB(){
    try{
        await db.sync({force:true})

        await animeShows.create({
            name: "Dragon Ball Z",
            creator: "Akira Toriyama",
            characters:"Goku, Vegeta, Gohan, trunks, Picollo, Gotenks",
            seasons: 7,
            imageUrl: "https://image.tmdb.org/t/p/w1280/zBM3raZddhsAl9N2sNz0A8PIUud.jpg",
        })

    }catch(error){
        console.log(error)

    } finally{
        await db.close()
        console.log("closed the db connection...")
    }
}

syncDB()