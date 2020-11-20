import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './js/converter.js';

function showExchange(response, country2, country2Name, amount) {
  if (response.base_code) {
    let convertBy = 0;
    let symbol = [];
    switch (country2) {
    case ("AUD"):
      convertBy += `${response.conversion_rates.AUD}`;
      symbol.push("A$");
      break;
    case ("CAD"):
      convertBy += `${response.conversion_rates.CAD}`;
      symbol.push("C$");
      break;
    case ("EUR"):
      convertBy += `${response.conversion_rates.EUR}`;
      symbol.push("€");
      break;
    case ("GBP"):
      convertBy += `${response.conversion_rates.GBP}`;
      symbol.push("£");
      break;
    case ("JPY"):
      convertBy += `${response.conversion_rates.JPY}`;
      symbol.push("¥");
      break;
    }
    let total = (convertBy*amount).toFixed(2);
    console.log(symbol);
    $(".show").append(`${symbol[0]} ${total} in ${country2Name}.`);
  } else {
    $(".show").append(`There was an error: ${response.message}`);
  }
}

async function makeApiCall(country1, country2, country2Name, amount) {
  const response = await CurrencyConverter.getConversion(country1);
  showExchange(response, country2, country2Name, amount);
}

$(document).ready(function() {
  $('#convert').click(function() {
    let country1 = $("option[class='country1']:selected").val();
    let country1Name = $("option[class='country1']:selected").attr("name");
    let country2 = $("option[class='country2']:selected").val();
    let country2Name = $("option[class='country2']:selected").attr("name");
    let amount = $(".money").val();
    makeApiCall(country1, country2, country2Name, amount);
    $(".show").append(`<li>${amount} of ${country1Name} currency is worth</li>`);
  });
});