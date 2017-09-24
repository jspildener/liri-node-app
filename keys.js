//console.log('this is loaded');

var twitterKeys = {
  consumer_key: 'T4Hulk7qyqtMpzs0Z6iEyDPfj',
  consumer_secret: 'dh1YY3Q3hZSrgK9Hrq1Ysp8CgXexi5hOutmbt25opef6gdRlhe',
  access_token_key: '911289124572758017-72Tpk4mDBAkNFNfyVooQWUlluY6mw5r',
  access_token_secret: 'KEUespsZhf4bqVcZmn6LucVLXQPwz90SPSUttySWxhNg5',
}

module.exports = twitterKeys;

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: 'e52171865c864ad381627bd0c2646088',
  secret: 'c33178ab63e244548c3e3a1349ed19e5',
});