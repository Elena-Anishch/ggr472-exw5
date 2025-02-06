mapboxgl.accessToken = 'pk.eyJ1IjoiZWxlbmEtYW5pc2hjaCIsImEiOiJjbTVvN2podncwanJ5Mm1wbnNuczl6c214In0.2ltrEF0cJrURbPWpaKr9bg'; // Add default public map token from your Mapbox account 
const map = new mapboxgl.Map({ 
container: 'my-map', // map container ID 
style: 'mapbox://styles/elena-anishch/cm6ietade00tn01qma2zw0fqw', // style URL 
center: [-79.4,43.63], // starting position [lng, lat] 
zoom: 4, // starting zoom level 
}); 

map.on('load', () => { 
 
    // Add a data source containing GeoJSON data 
    map.addSource('uoft-data', { 
        type: 'geojson', 
        data: { 
            "type": "FeatureCollection", 
            "features": [ 
                { 
                    "type": "Feature", 
                    "properties": { 
                        "name": "Sidney Smith Hall" 
                    }, 
                    "geometry": { 
                        "coordinates": [ 
                            -79.39865237301687, 
                            43.662343395037766 
                        ], 
                        "type": "Point" 
                    } 
                } 
            ] 
        } 
    }); 
 
    map.addLayer({ 
        'id': 'uoft-pnt', 
        'type': 'circle', 
        'source': 'uoft-data', 
        'paint': { 
            'circle-radius': 6, 
            'circle-color': '#B42222' 
        } 
 
    }); 
 
});