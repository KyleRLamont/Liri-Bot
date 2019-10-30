require("dotenv").config();

var keys = require("./keys.js");
var axios = require("axios");

var spotify = new Spotify(keys.spotify);

var inputstr = process.argv;
var command = inputstr[2];
var searchterm = inputstr[3];
var output;

switch(command){
    case "concert-this":
        output = concertsearch();
        break;
    case "spotify-this-song":
        output = spotifysearch();
        break;
    case "movie-this":
        output = moviesearch();
        break;
    case "do-what-it-says":
        output = dowhatsays();
        break;
}
console.log(output);

