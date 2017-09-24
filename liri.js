var infoKeys = require("./keys.js");
var fs = require("fs");

var twitter = require("twitter");
var Spotify = require('node-spotify-api');
var request = require("request");

var userDataRequest = process.argv[2];
var userInput = process.argv[3];
for (i = 4; i < process.argv.length; i++) {
    userInput += " " + process.argv[i];
}

function findMovie() {
    if (userInput === undefined) {
        userInput = "Mr. Nobody"
    }
    var query = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=40e9cece";
    request(query, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            var movieDetails = JSON.parse(body);
            console.log('Title: ' + movieDetails.Title);
            console.log('Year: ' + movieDetails.Year);
            console.log('IMDB Rating: ' + movieDetails.imdbRating);
            console.log('Country: ' + movieDetails.Country);
            console.log('Language: ' + movieDetails.Language);
            console.log('Plot: ' + movieDetails.Plot);
            console.log('Actors: ' + movieDetails.Actors);
            console.log('Rotten Tomatoes Rating: ' + movieDetails.tomatoRating);
        }
    });
};

switch (userDataRequest) {
    case "movie-this":
        findMovie();
        break;

}