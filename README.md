first of all create the database and give it a name 

for my instance i will go into psql  and type in 
CREATE DATABASE animeshows;  
this will create the database and give it a name

next you will initalize the file system , so go into your terminal and type in 
npm init -y   

next install the the package modules you will want to use for this project 
npm install express pg nodemon sequelize morgan 

after this you can type in the following commands into your terminal    npm start      this will start the express server  
then you will type in     npm run seed     this command will seed your database with data that we have already provided for you in the seed.js file 


to interact with this project  you can go to your favorite browser and type in the following
  localhost:3000/animeshows         here you will be able to see all the the shows that we have preloaded into the database 

