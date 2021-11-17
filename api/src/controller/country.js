const { Country, Activity, Op } = require('../db')
const axios = require('axios')
const urls = require('../utils/constants')

// call the api and save on db
const prechargeCountries = async () => {
  try {
    let { data } = await axios(urls.API_ALL_COUNTRIES)
    let countriesList = data.map(country => ({
      id: country.cca3,
      name: country.name.common,
      image: country.flags[0],
      continent: country.continents[0],
      capital: country.capital ? country.capital[0] : '',
      subregion: country.subregion ? country.subregion : '',
      area: country.area,
      population: country.population,
    }))
    // console.log(countriesList)
    await Promise.all(countriesList.map(
      async country => await Country.findOrCreate({ where: country })
    ))
      .then(response => {
        console.log("Countries loaded successfully")})
      .catch(error => console.log("Reset the system"))
  } catch (error) {
    return new Error(error)
  }
}

const countriesList = async (name) => {
  let searchConfig = {
    attributes: ['id', 'name', 'image', 'continent'],
    include: {
      model: Activity,
      as: 'activities',
      attributes: ['id', 'name'],
      through: {
        attributes: []
      }
    }
  }
  if (name) searchConfig.where = {
    name: {
      [Op.iLike]: `%${name}%`
    }
  }
  
  try {
    const countriesList = await Country.findAll(searchConfig)
    return countriesList
  } catch (error) {
    return new Error(error)
  }
}

const countryByPk = async (id) => {
  try {
    const countryData = await Country.findByPk(id, {include: {
      model: Activity,
      as: 'activities',
      through: {
        attributes: []
      }
    }})
    return countryData
  } catch (error) {
    return new Error(error)
  }
}

module.exports = {
  prechargeCountries,
  countriesList,
  countryByPk,
}
