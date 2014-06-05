var L = require('leaflet');

var map = L.map(document.querySelector('#mapdiv'), {
	center: [0.0, 0.0],
	zoom: 0,
	layers: [L.tileLayer('http://earthquake.usgs.gov/basemap/tiles' +
			'/natgeo_hires/{z}/{y}/{x}.jpg')]
});

map.fitWorld();
