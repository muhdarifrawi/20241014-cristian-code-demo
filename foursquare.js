async function main() {

    function init() {
        // let map = initMap();
        let singapore = [1.29, 103.85];
        let map = L.map('map');
        map.setView(singapore, 13);
    
        // setup tilelayer
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1IjoiZXh0cmFrdW4iLCJhIjoiY2swdnZtMWVvMTAxaDNtcDVmOHp2c2lxbSJ9.4WxdONppGpMXeHO6rq5xvg'
        }).addTo(map);
        window.addEventListener('DOMContentLoaded', async (event) => {
            // setup event listeners here
            let response = await search(1.29, 103.85, "mcdonalds");
            console.log(response);

            let markerClusterLayer = L.markerClusterGroup()

            response.results.map((each) =>{
                console.log(each.geocodes.main)
                let lat = each.geocodes.main.latitude;
                let long = each.geocodes.main.longitude;

                let eachMarker = [lat, long];
                L.marker(eachMarker).addTo(markerClusterLayer);
                
            })
            markerClusterLayer.addTo(map);
        })

    }


    init();
}

async function initMap() {
    let singapore = [1.29, 103.85];
    let map = L.map('map');
    map.setView(singapore, 13);

    // setup tilelayer
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZXh0cmFrdW4iLCJhIjoiY2swdnZtMWVvMTAxaDNtcDVmOHp2c2lxbSJ9.4WxdONppGpMXeHO6rq5xvg'
    }).addTo(map);

    return map;
}

main();