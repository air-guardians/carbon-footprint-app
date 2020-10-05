import { Component, OnInit } from '@angular/core';
//const fs = require('plotly.js')
declare let Plotly: any;

@Component({
  selector: 'app-user-profile',
  templateUrl: './ecuador.component.html',
  styleUrls: ['./ecuador.component.css']
})
export class EcuadorComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
    var data = [{
      type: "choroplethmapbox",
      locations: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],
      text:["AZUAY","BOLIVAR","CAÑAR","CARCHI","COTOPAXI","CHIMBORAZO","EL ORO","ESMERALDAS","GUAYAS","IMBABURA","LOJA","LOS RIOS","MANABI","MORONA SANTIAGO","NAPO","PASTAZA","PICHINCHA","TUNGURAHUA","ZAMORA CHINCHIPE","GALAPAGOS","SUCUMBIOS","ORELLANA","SANTO DOMINGO DE LOS TSACHILAS","SANTA ELENA"],      
      z: [4.303, 0.839, 0.938, 1.231, 1.882, 1.914, 10.350, 2.206, 44.114,
          4.167, 1.457, 7.625, 12.291, 2.440, 2.440, 2.440, 22.912, 2.994,
          2.440, 2.440, 2.440, 2.440, 3.288, 2.907, 0.345],
      geojson: "./assets/ecuador.geojson",
      colorbar: {
        title: {
          text: "Mt CO2",
          side: "right"
        }
      } 
    },
    {
      type: "scattermapbox",
      lat:[-2.321218, -3.370659, -1.590430],
      lon:[-80.808516, -79.191974, -78.035387],
      mode:'markers',
      marker:{
        symbol: ['place-of-worship', 'fuel', 'castle'],
        size: 20,
        allowoverlap: true,
      },
      text: ['Food processing', 'Petroleum refining', 'Powerplant']
    }];
    
    var layout = {mapbox: {center: {lon: -79, lat: -1.8}, zoom: 5.5},
                  width: 800, height:600};
    
    var config = {mapboxAccessToken: "pk.eyJ1IjoiamF2aWxsYW8iLCJhIjoiY2szcW5iaGp6MDNnZTNucHNpM3l5d2ZqcyJ9.mPBk3ZOVSp1N4yAIglYLpg"};
    Plotly.newPlot('ecuador-map', data, layout, config);
  }


}
