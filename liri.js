require("dotenv").config();

var moment = require("moment");
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require("node-spotify-api");

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

function concertsearch() {
    var queryURL = "https://rest.bandsintown.com/artists/" + searchterm + "/events?app_id=codingbootcamp";

    axios.get(queryURL).then(function (response) {
        for (i = 0; i < response.data.length; i++) {
            console.log("Name of Venue: " + response.data[i].venue.name + "\nLocation: " + response.data[i].venue.city + "\n Date: " + moment(response.data[i].datetime).format('MM/DD/YYYY'))
        };
    }).catch(function (error) {
        if (error.response) {
            console.log("---------------Data---------------");
            console.log(error.response.data);
            console.log("---------------Status---------------");
            console.log(error.response.status);
            console.log("---------------Status---------------");
            console.log(error.response.headers);
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log("Error", error.message);
        }
        console.log(error.config);
    });
};

function spotifysearch() {
    spotify
        .search({ type: 'track', query: searchterm, limit: 1 }, function (error, data) {
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

function moviesearch() {
    var omdbURL = 'http://www.omdbapi.com/?t=' + movie + '&apikey=' + omdbKey + '&plot=short&tomatoes=true';

    request(omdbURL, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var body = JSON.parse(body);

            console.log("Title: " + body.Title);
            console.log("Release Year: " + body.Year);
            console.log("IMdB Rating: " + body.imdbRating);
            console.log("Country: " + body.Country);
            console.log("Language: " + body.Language);
            console.log("Plot: " + body.Plot);
            console.log("Actors: " + body.Actors);
            console.log("Rotten Tomatoes Rating: " + body.tomatoRating);

        } else {
            console.log('Error occurred.')
        }
        if (movie === "Mr. Nobody") {
            console.log("-----------------------");
            console.log("If you haven't watched 'Mr. Nobody,' then you should: http://www.imdb.com/title/tt0485947/");
            console.log("It's on Netflix!");

        }
    });
}

function dowhatsays() {

};