import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import changeState from './js/Plants.js';
import stateControl from './js/Plants.js';

//what to feed plant
const hydroFeed = changeState ("soil")(1);
const bacteriaFeed = changeState ("soil")(5);
const meatFeed = changeState ("soil")(10);
const synthFeed = changeState ("soil")(15);

//how much light does plant need
const noLight = changeState ("light")(-1);
const blackLight = changeState ("light")(1);
const someLight = changeState ("light")(3);
const maxLight = changeState ("light")(5);

//how much water does plant need
const noWater = changeState ("water")(-1);
const someWater = changeState ("water")(2);
const lotsOfWater = changeState ("water")(3);

$(document).ready(function() {
  //soil
  $('#hydroFeed').click(function(){
    const newState = stateControl(hydroFeed);
    $('#soil-value').text(`Soil : ${newState.soil}`);
  });
  $('#bacteriaFeed').click(function(){
    const newState = stateControl(bacteriaFeed);
    $('#soil-value').text(`Soil : ${newState.soil}`);
  });
  $('#meatFeed').click(function(){
    const newState = stateControl(meatFeed);
    $('#soil-value').text(`Soil : ${newState.soil}`);
  });
  $('#synthFeed').click(function(){
    const newState = stateControl(synthFeed);
    $('#soil-value').text(`Soil : ${newState.soil}`);
  });

  //light
  $('#noLight').click(function(){
    const newState = stateControl(noLight);
    $('#light-value').text(`Light : ${newState.light}`);
  });
  $('#blackLight').click(function(){
    const newState = stateControl(blackLight);
    $('#light-value').text(`Light : ${newState.light}`);
  });
  $('#someLight').click(function(){
    const newState = stateControl(someLight);
    $('#light-value').text(`Light : ${newState.light}`);
  });
  $('#maxLight').click(function(){
    const newState = stateControl(maxLight);
    $('#light-value').text(`Light : ${newState.light}`);
  });

  //water
  $('#noWater').click(function(){
    const newState = stateControl(noWater);
    $('#water-value').text(`Water : ${newState.water}`);
  });
  $('#someWater').click(function(){
    const newState = stateControl(someWater);
    $('#water-value').text(`Water : ${newState.water}`);
  });
  $('#lotsOfWater').click(function(){
    const newState = stateControl(lotsOfWater);
    $('#water-value').text(`Water : ${newState.water}`);
  });
});