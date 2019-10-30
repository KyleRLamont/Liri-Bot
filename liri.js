require("dotenv").config();

var moment = require("moment");
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var fs = require("fs");

var spotify = new Spotify(keys.spotify);

var inputstr = process.argv;
var command = inputstr[2];
var searchterm = inputstr[3];


switch (command) {
    case "concert-this":
        concertsearch(searchterm);
        break;
    case "spotify-this-song":
        if (searchterm) {
            spotifysearch(searchterm);
        } else { spotifysearch("The Sign") };
        break;
    case "movie-this":
        moviesearch(searchterm);
        break;
    case "do-what-it-says":
        dowhatsays(searchterm);
        break;
}

function concertsearch(artist) {
    var queryURL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryURL).then(function (response) {
        for (i = 0; i < response.data.length; i++) {
            console.log("Name of Venue: " + response.data[i].venue.name + "\nLocation: " + response.data[i].venue.city + "\n Date: " + moment(response.data[i].datetime).format('MM/DD/YYYY'))
        };
    }).catch(function (error) {
        console.log(error)
    });
};

function spotifysearch(song) {
    spotify.search({ type: 'track', query: song, limit: 1 }, function (error, data) {
        if (!error) {
            for (var i = 0; i < data.tracks.items.length; i++) {
                var songData = data.tracks.items[i];
                console.log("Artist: " + songData.artists[0].name + "\nSong: " + songData.name + "\nPreview URL: " + songData.preview_url + "\nAlbum: " + songData.album.name + "\n-----------------------");
            }
        } else {
            console.log('Error occurred.');
        }
    });
};

function moviesearch(movie) {
    var omdbURL = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    axios.get(omdbURL).then(function (response) {
        console.log("Title: " + response.data.Title + "\nRelease Year: " + response.data.Year + "\nIMdB Rating: " + response.data.imdbRating + "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value + "\nCountry: " + response.data.Country + "\nLanguage: " + response.data.Language + "\nPlot: " + response.data.Plot + "\nActors: " + response.data.Actors);
    }).catch(function (error) {
        console.log(error);
    })
};

function dowhatsays() {
    fs.readFile('random.txt', "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }

        var txt = data.split(',');
        
        spotifysearch(txt[1]);
        }
    )}
