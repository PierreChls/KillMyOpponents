# Kill my tweets

Small interface to display real-time tweets and able to be destroyed by the user.

## How to use it

#### Clone the project

	git clone https://github.com/pierrechls/kill-my-tweets.git

#### Go to the project root

	cd kill-my-tweets

#### Install all modules from package.json file

	npm install

#### Create a JSON file configuration to connect your Twitter App

	{
		"consumer_key"        : "[YOUR_CONSUMER_KEY]",
		"consumer_secret"     : "[YOUR_CONSUMER_SECRET]",
		"access_token_key"    : "[YOUR_ACCESS_TOKEN_KEY]",
		"access_token_secret" : "[YOUR_ACCESS_TOKEN_SECRET]"
	}

- Copy/paste this text on your json file
- Name this file : **twitter_auth.json**
- Put it in the **init** folder
- Complete with your authentication informations

#### Run app

	node app.js

#### Open your favorite browser and tap this url

	http://localhost:8080/

## Prior installation

You have to download [Node.js](https://nodejs.org/en/download/)
