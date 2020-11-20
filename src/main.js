import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './js/converter.js';

function showExchange(response, country2) {
  if (response.base_code) {
    switch (country2) {
    case ("AUD"):
      $(".show").append(`The exchange rate is ${response.conversion_rates.AUD} per 1` );
      break;
    case ("CAD"):
      $(".show").append(`The exchange rate is ${response.conversion_rates.CAD} per 1` );
      break;
    }
  } else {
    $(".show").append(`There was an error: ${response.message}`);
  }
}

async function makeApiCall(country1, country2) {
  const response = await CurrencyConverter.getConversion(country1);
  showExchange(response, country2);
}

$(document).ready(function() {
  $('#convert').click(function() {
    let country1 = $("option[name='country1']:selected").val();
    let country2 = $("option[name='country2']:selected").val();
    let amount = $(".money").val();
    makeApiCall(country1, country2);
    $(".show").append(`<li>${amount} in ${country1} is TBD in ${country2}</li>`);
  });
});