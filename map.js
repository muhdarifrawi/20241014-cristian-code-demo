var map = L.map('map').setView([1.290270, 103.851959], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let singaporeMarker = L.marker([1.29, 103.85]);

singaporeMarker.addTo(map);

singaporeMarker.bindPopup("<p>Singapore</p>")

singaporeMarker.addEventListener('click', function(){
    alert("Singapore");
})

let circle = L.circle([1.35166526, 103.773663572], {
    color: 'red',
    fillColor:"orange",
    fillOpacity:0.5,
    radius: 500
})

// add it to the map
circle.addTo(map);

let singaporeZooLatLong = L.marker([1.4054912307866547, 103.7930963864067]);
let singaporeDiscoveryCenterLatLong = L.marker([1.33286201493362, 103.67898611534234]);
let singaporeJurongBirdparkLatLong = L.marker([1.318921018545677, 103.70639878110778]);

singaporeZooLatLong.addTo(map);
singaporeDiscoveryCenterLatLong.addTo(map);
singaporeJurongBirdparkLatLong.addTo(map);

singaporeZooLatLong.bindPopup("<p>Singapore Zoo</p>");
singaporeDiscoveryCenterLatLong.bindPopup("<p>Singapore Discovery Center</p>");
singaporeJurongBirdparkLatLong.bindPopup("<p>Singapore Birdpark</p>");

// function getRandomLatLng(map) {
//     // get the boundaries of the map
//     let bounds = map.getBounds();
//     let southWest = bounds.getSouthWest();
//     let northEast = bounds.getNorthEast();
//     let lngSpan = northEast.lng - southWest.lng;
//     let latSpan = northEast.lat - southWest.lat;

//     let randomLng = Math.random() * lngSpan + southWest.lng;
//     let randomLat = Math.random() * latSpan + southWest.lat;

//     return [ randomLat, randomLng,];
// }

// let markerClusterLayer = L.markerClusterGroup();

// for (let i = 0; i < 1000; i++) {
//     let pos = getRandomLatLng(map);
//     L.marker(pos).addTo(markerClusterLayer);
// }

// markerClusterLayer.addTo(map);

