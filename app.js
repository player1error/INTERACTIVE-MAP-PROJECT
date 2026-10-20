const map = L.map("map").setView([51,70], 2,5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '<a  href="https://chatgpt.com/">HELP</a>'
}).addTo(map);

// this is a marker on the map
var marker = L.marker([51.05, 3.72]).addTo(map);

async function fetchCities(){
    // get data in response
    const response = await fetch("city.json");
    //data translate into data
    const data = await response.json();
    showCities(data);
    showCity(data);
    showcircle(data);


};

function showCities(cities){
    cities.forEach(city=>{
        // console.log(city.country, city.name);
        const marker = L.marker([city.lat , city.long]).addTo(map);
        marker.bindPopup(`
        <h1>${city.name}</h1>
        <h2>Country: ${city.country}</h2>`);
// this makes the pop up on the map when you click
        marker.on('click', () => {
        showCity(city);
    });
    marker.on("click", () => {
        map.setView([city.lat, city.long], 8.5);
        if (!city.name) return;
        marker.bindPopup(`${city.name}`).openPopup();
        });
});


};
// this is the card that shows you the coutnry info on the side
function showCity(element){
    const infoElement = document.getElementById("card-info");
   
        infoElement.innerHTML = `
        <h1>${element.name}</h1>
        <h2>Country: ${element.country}</h2>
        <p>Population: ${element["Population:"]??  "Unknown"}</p>
        <p>Language: ${element["Language:"]}</p>
        <p>Currency: ${element["Currency:"]}</p>
        <p>Famous landmark: ${element["Famous landmark:"] ?? "Unknown"}</p>
        <p>Known for: ${element["Known for:"]}</p>
        <p>Capital: ${element.isCapital ? "Yes" : "No"}</p>
    
    `

};

// this displays a circle 
function showcircle(cities) {
    cities.forEach(city => {
        
        // this displays a circle on evry city 
        const circle = L.circle(
            [city.lat, city.long], {
                "name": city.circle.name,
                "color": city.circle.color,
                "fillColor": city.circle.fillColor,
                "fillOpacity": city.circle.fillOpacity,
                "radius": city.circle.radius
            }
        ).addTo(map);
        // this zooms onto my marker
        circle.on("click", () => {
        map.setView([city.lat, city.long], 10);
        if (!city.circle.name) return;
        circle.bindPopup(`${city.circle.name}`).openPopup();
        });

    });
}




// var circle = L.circle([51.508, -0.11], {
//     color: 'green',
//     fillColor: 'rgb(12, 93, 3)',
//     fillOpacity: 0.4,
//     radius: 5000000
// }).addTo(map);



fetchCities();
