# Liri-Bot

![Capture2](/Images/moviethisscreen.jpg)

## Problem: 
Liri is just like Siri, only uses language instead of speech. I wanted a way to take text input and have it run commands similar to our favorite voice activated helper, but to have it run with Node.js. Everyone uses Node, right?

## Organization: 
The app is organized as-
1. Global variables for all functions. This includes the requirement functions, such as axios and moment, in order for the app to function properly. 
2. Then switch commands taking in the command argument as well as the searchterm input and executing specified functions based on the command used.
3. Each function is then separate, allowing for easier editing later and adding to functions.

## Using the App: 
To use the app, simply clone the github repository to your computer. In bash/command, run node liri.js movie-this "Movie title," spotify-this-song "Song title," concert-this "Artist name," or do-what-it-says. You will need your own spotify API key in order to use the spotify feature. That can be obtained here. Per Spotify, it is possible for null to be returned for the preview_url. 

[Spotify](https://developer.spotify.com/dashboard/login)

## Screencaptures:

![Capture1](/Images/concertthisscreen.jpg)

![Capture2](/Images/moviethisscreen.jpg)

![Capture3](/Images/spotifyscreencapture.jpg)

![Capture4](/Images/dowhatsays.jpg)

![Capture5](/Images/dowhatsays2.jpg)

![Capture6](/Images/dowhatsays3.jpg)

## Technologies Used: 
1. Node.js
2. Axios
3. OMDB API
4. Spotify API
5. Moment.js

## My role: 
I was sole developer for this project. 