import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './js/converter.js';

$(document).ready(function() {
  $('#convert').click(function() {
    let country1 = $("option[name='country1']:selected").val();
    let country2 = $("option[name='country2']:selected").val();
    let amount = $(".money").val();
    console.log(country1, country2, amount);
    CurrencyConverter.getConversion(country1);
  });
});