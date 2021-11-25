

export const filterGalleryLogic = async (
  filters, countries, filteredCountries, setFilteredCountries
) => {
  if (filters.hasChanged) {
    let filteredArray
    switch (filters.hasChanged) {
      // si es uno de los filtros el que ha cambiado
      case "filterByName":{
        filteredArray = letFilter(countries, filters)
        filteredArray = letOrder(filteredArray, filters)
      } break;
      case "filterByContinent": {

        // let filteredArray = countries
        filteredArray = letFilter(countries, filters)
        filteredArray = letOrder(filteredArray, filters)
      }break;
      case "orderByPopulation":
        filteredArray = letOrder(filteredCountries, filters)
        break;
      case "orderByName": {
        filteredArray = letOrder(filteredCountries, filters)


        // filteredArray = filteredCountries.sort
      }
        break;
      default: break;
    }
    setFilteredCountries(filteredArray)
  }

}
function letFilter(countries, filters) {
  const expName = new RegExp(filters.filterByName, 'i')
  const expContinent = new RegExp(filters.filterByContinent, 'i')
  return countries.filter(data => {
    if (
      expContinent.test(data.continent) &&
      (expName.test(data.name) || (expName.test(data.id)))
    ) return data
  })
}
function letOrder(filteredArray, filters) {
  if (filters.orderByName !== '') {
    filteredArray.sort((a, b) => {
      return filters.orderByName === 'asc'
        ? b.name.localeCompare(a.name)
        : filters.orderByName === 'des'
        && a.name.localeCompare(b.name)
    })
  }
  if (filters.orderByPopulation !== '') {
    filteredArray.sort((a, b) => {
      return filters.orderByPopulation === 'des'
        ? a.population - b.population
        : filters.orderByPopulation === 'asc'
        && b.population - a.population
    })
  }
  return filteredArray
}