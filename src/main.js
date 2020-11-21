import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import CurrencyConverter from './service/converter-service.js';

function showExchange(response, country1, country1Name, country2, country2Name, amount) {
  if (amount < 0 || amount.match(/[a-z]/i) || amount.length === 0) {
    $(".money").val("");
    alert("You must enter a number larger then 0.");
    return false;
  } else if (response.base_code) {
    let convertBy = 0;
    let symbol1 = [];
    let symbol2 = [];
    switch (country1) {
    case (""):
      alert("This currency conversion doesnt exist yet");
      return false;
    case ("USD"):
    case ("AUD"):
    case ("CAD"):
      symbol1.push("$");
      break;
    case ("EUR"):
      symbol1.push("€");
      break;
    case ("GBP"):
      symbol1.push("£");
      break;
    case ("JPY"):
    case ("CNY"):
      symbol1.push("¥");
      break;
    case ("RUB"):
      symbol1.push("₽");
      break;
    case ("AED"):
      symbol1.push("د.إ");
      break;
    case ("INR"):
      symbol1.push("₹");
      break;
    case ("KRW"):
      symbol1.push("₩");
      break;
    case ("BRL"):
      symbol1.push("R$");
      break;
    }
    switch (country2) {
    case (""):
      alert("This currency conversion doesnt exist yet");
      return false;
    case ("USD"):
      convertBy += `${response.conversion_rates.USD}`;
      symbol2.push("$");
      break;
    case ("AUD"):
      convertBy += `${response.conversion_rates.AUD}`;
      symbol2.push("$");
      break;
    case ("CAD"):
      convertBy += `${response.conversion_rates.CAD}`;
      symbol2.push("$");
      break;
    case ("EUR"):
      convertBy += `${response.conversion_rates.EUR}`;
      symbol2.push("€");
      break;
    case ("GBP"):
      convertBy += `${response.conversion_rates.GBP}`;
      symbol2.push("£");
      break;
    case ("JPY"):
      convertBy += `${response.conversion_rates.JPY}`;
      symbol2.push("¥");
      break;
    case ("RUB"):
      convertBy += `${response.conversion_rates.RUB}`;
      symbol2.push("₽");
      break;
    case ("AED"):
      convertBy += `${response.conversion_rates.AED}`;
      symbol2.push("د.إ");
      break;
    case ("INR"):
      convertBy += `${response.conversion_rates.INR}`;
      symbol2.push("₹");
      break;
    case ("KRW"):
      convertBy += `${response.conversion_rates.KRW}`;
      symbol2.push("₩");
      break;
    case ("CNY"):
      convertBy += `${response.conversion_rates.CNY}`;
      symbol2.push("¥");
      break;
    case ("BRL"):
      convertBy += `${response.conversion_rates.BRL}`;
      symbol2.push("R$");
      break;
    }
    $(".show").append(`<li>${symbol1[0]}${amount} of ${country1Name} currency is worth</li>`);
    let total = (convertBy*amount).toFixed(2);
    $(".show").append(`${symbol2[0]}${total} in ${country2Name}.`);
  } else {
    $(".show").append(`There was an error: ${response.message}`);
  }
}

async function makeApiCall(country1, country1Name, country2, country2Name, amount) {
  const response = await CurrencyConverter.getConversion(country1);
  showExchange(response, country1, country1Name, country2, country2Name, amount);
}

$(document).ready(function() {
  $('#convert').click(function() {
    let country1 = $("option[class='country1']:selected").val();
    let country1Name = $("option[class='country1']:selected").attr("name");
    let country2 = $("option[class='country2']:selected").val();
    let country2Name = $("option[class='country2']:selected").attr("name");
    let amount = $(".money").val();
    makeApiCall(country1, country1Name, country2, country2Name, amount);
  });
});