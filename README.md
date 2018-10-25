# scenegrenade-api

Using udemy material in 'MERN stack front to back' courseware as starting point

npm init
npm i express mongoose passport passport-jwt jsonwebtoken body-parser eslint bcryptjs validator
npm i -D nodemon # devDependency

create a config/keys.js file which will not go to repo due to .gitignore with contents like this.

module.exports = {
  mongoURI:
    "mongodb://username:password@ds121311.mlab.com:21311/scenegrenade"
};
