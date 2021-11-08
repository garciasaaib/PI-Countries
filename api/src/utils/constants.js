module.exports = {
  API_ALL_COUNTRIES: "https://restcountries.com/v3/all",
  API_BY_NAME: (name) => `https://restcountries.com/v3/name/${name}`,
  API_BY_CODE: (code) => `https://restcountries.com/v3/alpha/${code}`,
}