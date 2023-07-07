const {db, animeShows} = require('./server/db/index.js')



 const seed = async ()=>{
    try{
        await db.sync({force: true})
         
        await animeShows.create({
            name: 'Dragon Ball Z',
            creator: 'Akira Toriyama',
            characters: 'Goku, Gohan, Vegeta, Trunks',
            seasons: 7,
            imageUrl: 'https://th.bing.com/th/id/R.855b2319c91030873fe40b903cfe0a5f?rik=kM91ARRBQG0AMw&riu=http%3a%2f%2fwww.hdwallpaper.nu%2fwp-content%2fuploads%2f2015%2f06%2f1424161722-dragon-ball.jpg&ehk=DmZKhm3scvc2eNntgKJlq8gojsYkmfNyOLNmdZ%2f5bM8%3d&risl=1&pid=ImgRaw&r=0'
            
        })

        await animeShows.create({
            name: 'Naruto',
            creator: 'Masashi Kishimoto',
            characters: 'Naruto, Sasuke, Itachi, Kakashi',
            seasons: 21,
            imageUrl: 'https://wallpapercave.com/wp/wp3170365.jpg'
        })

        await animeShows.create({
            name: 'OnePiece',
            creator: 'Eiichiro Oda',
            characters: 'Monkey D.Luffy, Roronoa Zoro, Nami, Usopp, Sanji',
            seasons: 20,
            imageUrl: 'https://wallpapercave.com/wp/ytCCix9.jpg'
            
        })

        console.log("Created all animeshows...")

    }catch(error){
        console.log(error)

    } finally{
        await db.close()
        console.log("closed the database connection...")
    }
}

seed()