# What is the Interactive Map Project?

> The Interactive Map Project displays cities from around the world on an interactive map. Click a marker to view information about the city.

## Repository description

This project is an interactive world map built with Leaflet and OpenStreetMap. City data is loaded from a JSON file and displayed using markers and popups.

## Files and folders

- `city.json` - contains the city names, coordinates, countries, populations, languages, currencies, landmarks, and other information
- `color.css` - contains the styling for the page and map
- `index.html` - contains the structure of the webpage and loads Leaflet
- `app.js` - creates the map, loads the city data, and displays the markers and popups
- `README.md` - contains information about the project

## How to run the project

Because the city data is loaded with `fetch()`, run the project through a local web server instead of opening `index.html` directly.

For example, use the Live Server extension in Visual Studio Code and open `index.html` with Live Server.

## Technologies used

- HTML
- CSS
- JavaScript
- Leaflet
- OpenStreetMap
- JSON

## TODO

- Improve the layout and styling
- Display selected city information in the information card

## Authors

Just me
