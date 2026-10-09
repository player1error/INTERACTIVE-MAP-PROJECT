# Interactive Map Project

> An interactive world map that displays information about cities from around the world.

## What is the Interactive Map Project?

The Interactive Map Project is a web application built with Leaflet and OpenStreetMap. It loads city data from a JSON file and places a marker for every city on the map.

Click a marker to view information about the selected city, including its country, population, language, currency, famous landmark, what it is known for, and whether it is a capital city.

## Features

- Explore cities on an interactive world map
- Zoom and move around the map
- View city information by clicking a marker
- Load city data from a JSON file
- Display `Unknown` when certain information is unavailable

## Files and folders

- `index.html` - contains the structure of the webpage and loads Leaflet
- `color.css` - contains the styling for the page and map
- `app.js` - creates the map, loads the city data, and adds the markers and popups
- `city.json` - contains the coordinates and information for all cities
- `README.md` - contains information about the project


## How to run the project

The project must be opened through a local web server because JavaScript loads `city.json` with `fetch()`.

1. Download or clone the repository.
2. Open the project folder in Visual Studio Code.
3. Install the **Live Server** extension if it is not installed yet.
4. Right-click `index.html` and select **Open with Live Server**.
5. Click a marker on the map to view information about a city.

## Author

[player1error](https://github.com/player1error)

