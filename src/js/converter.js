export default class CurrencyConverter {
  static getConversion(country1) {
    return fetch (`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${country1}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        console.log(response.json());
        return response.json();
      })
      .catch(function(error) {
        return Error(error);
      });
  }
}