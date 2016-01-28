# KillMyOpponents

Project realized for the [Soixantes Circuits](http://soixantecircuits.fr/)'s studio, as part of a test for an internship. Small interface to display real-time tweets and able to be destroyed by the user.

**Supported OS :**

- Linux Ubuntu
- Mac OSX
- Windows

## How to use it

#### Clone the project

	git clone https://github.com/PierreChls/KillMyOpponents.git
	
#### Go to the project root

	cd KillMyOpponents
	
#### Install all modules from package.json file

	npm install

#### Create a JSON file configuration to connect your Twitter App

- Name this file : **twitter_auth.json**
- Put it in the **init** folder
- Copy/paste this text on your json file

	{
	    "consumer_key"        : "[YOUR_CONSUMER_KEY]",
	    "consumer_secret"     : "[YOUR_CONSUMER_SECRET]",
	    "access_token_key"    : "[YOUR_ACCESS_TOKEN_KEY]",
	    "access_token_secret" : "[YOUR_ACCESS_TOKEN_SECRET]"
	}

- Complete with your authentication informations
	
#### Run app

	node app.js
	
#### Open your favorite browser and tap this url

	http://localhost:8080/
	
## Prior installation

You have to download [Node.js](https://nodejs.org/en/download/)

