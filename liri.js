var dataKeys = require("./keys.js");
var fs = require("fs");

var Twitter = require("twitter");
var Spotify = require('node-spotify-api');
var request = require("request");

var userDataRequest = process.argv[2];
var userInput = process.argv[3];
for (i = 4; i < process.argv.length; i++) {
    userInput += " " + process.argv[i];
}

switch (userDataRequest) {
    case "movie-this":
        findMovie();
        break;
    case "my-tweets":
        findTweets();
        break;
    case "spotify-this-song":
        findMusic();
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
}

function findMovie() {
    if (userInput === undefined) {
        userInput = "Mr. Nobody"
    }
    var query = "http://www.omdbapi.com/?t=" + userInput + "&y=&plot=short&apikey=40e9cece&tomatoes=true&r=json";
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

function findTweets() {
    if (userInput === undefined) {
        userInput = "chrissyteigen"
    }
    var client = new Twitter(dataKeys);
    var params = { screen_name: userInput, count: 20 };

    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            if (tweets.length > 0);
            for (i = 0; i < tweets.length; i++) {
                console.log((i + 1) + ": " + tweets[i].text);
                console.log("----------------------------------------------------");
            }
        } else {
            console.log("Error occured");
        }
    });
};

function findMusic() {
    if (userInput === undefined) {
        userInput = 'Mr. Brightside'
    }

    var spotify = new Spotify({
        id: 'e52171865c864ad381627bd0c2646088',
        secret: 'c33178ab63e244548c3e3a1349ed19e5',
    });

    spotify.search({ type: 'track', query: userInput, limit: 3 }, function(err, data) {
        if (!err) {
            for (i = 0; i < data.tracks.items.length; i++) {
                var song = data.tracks.items[i];
                console.log('Title: ' + song.name);
                console.log('Artist Name: ' + song.artists[0].name);
                console.log('Album Name: ' + song.album.name);
                console.log('Preview Link: ' + song.preview_url);
                console.log("----------------------------------------------------");
            }
        } else {
            console.log("Error occured: " + err);
        }
    });
};