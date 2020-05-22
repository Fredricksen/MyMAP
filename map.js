
/*
let map = L.map('map').fitWorld();

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('select-location').addEventListener('change', function(e){
  let coords = e.target.value.split(",");
  L.marker(coords).addTo(map)
  map.flyTo(coords, 18);
});
*/
const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'

let myMap = L.map('myMap').setView([20.547165, -104.045974], 10) /* Def. Var- y coordenada vista*/
L.tileLayer(tilesProvider,{  /*invo a biblioteca */
  maxZoom: 18,
  attribution:
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap)


