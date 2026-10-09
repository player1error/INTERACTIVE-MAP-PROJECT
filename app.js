const map = L.map("map").setView([51,70], 2,5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// this is a marker on the map
var marker = L.marker([51.05, 3.72]).addTo(map);

async function fechtCities(){
    // get data in response
    const response = await fetch("city.json");
    //data translate into data
    const data = await response.json();
    showCities(data);


};

function showCities(cities){
    cities.forEach(city=>{
        console.log(city.country, city.name);
        const marker = L.marker([city.lat , city.long]).addTo(map);

        marker.bindPopup(`
            <h1>${city.name}</h1>
            <p>Country: ${city.country}</p>
            <p>Population: ${city["Population:"] ?? "Unknown"}</p>
            <p>Language: ${city["Language:"]}</p>
            <p>Currency: ${city["Currency:"]}</p>
            <p>Famous landmark: ${city["Famous landmark:"] ?? "Unknown"}</p>
            <p>Known for: ${city["Known for:"]}</p>
            <p>Capital: ${city.isCapital ? "Yes" : "No"}</p>
        `);

    });


};

function showCity(){


};





fechtCities();
