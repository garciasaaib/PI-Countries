const { Country, Activity } = require('../db')
const axios = require('axios')
const urls = require('../utils/constants')

const prechargeCountries = async () => {
  try {
    let countriesList = await axios(urls.API_ALL_COUNTRIES)
    countriesList = await countriesList.data.map(country => ({
      id: country.cca3,
      name: country.name.common,
      image: country.flags[0],
      continent: country.continents[0],
      capital: country.capital[0],
      subregion: country.subregion,
      area: country.area,
      population: country.population,
    }))

    console.log(countriesList)
    // Promise.all(countriesList.map(
    //     country => Country.findOrCreate({ where: country })
    //   ))
    //   .then(_ => console.log("Countries loaded successfully"))
    //   .catch(error => console.log("Reset the system"))
  } catch (error) {
    return error
  }
}

module.exports = {
  prechargeCountries
}
