

// Grabbing information from one JS to another JS
var keys = require("./keys.js");
// Load the NPM twitter package
var Twitter = require("twitter");

// var skeys = require("./skeys.js");

var arg = process.argv[2];
console.log(arg);

if (arg === "my-tweets") {
	tweets();
}

function tweets() {
	var client = new Twitter({
		consumer_key: keys.twitterKeys.consumer_key,
		consumer_secret: keys.twitterKeys.consumer_secret,
		access_token_key: keys.twitterKeys.access_token_key,
		access_token_secret: keys.twitterKeys.access_token_secret
	});

	console.log("before git");
	var params = {screen_name: "CalleryFnicko"};
	client.get("statuses/user_timeline", params, function(error, tweets, response) {
		console.log("inside here");
		if (!error) {
			for (var i = 0; i < 5; i++) {
			console.log(tweets[i].text, tweets[i].created_at);
			}
		}
		});
};



