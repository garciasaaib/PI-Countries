
export const filterGalleryLogic = async (
  filters, countries, filteredCountries, setFilteredCountries, setPage
) => {
  let lastPage
  if (filters.hasChanged) {
    let filteredArray
    switch (filters.hasChanged) {
      // si es uno de los filtros el que ha cambiado
      case "filterByName":
      case "filterByContinent": {

        filteredArray = letFilter(countries, filters)
        filteredArray = letOrder(filteredArray, filters)
        break;
      }
      case "orderByPopulation":
      case "orderByName": {
        filteredArray = letOrder(filteredCountries, filters)

break;
      }
      default: break;
    }
    setFilteredCountries(filteredArray)
    lastPage = Math.ceil(filteredArray.length / 9)
  }
  else {
    setFilteredCountries(countries)
    lastPage = Math.ceil(countries.length / 9)
  }
  setPage({ currentPage: 1, lastPage, slicedNumber: 0})
  
}


function letFilter(countries, filters) {
  const expName = new RegExp(filters.filterByName, 'i')
  const expContinent = new RegExp(filters.filterByContinent, 'i')
  const newData = countries.filter(data => {
    if (
      expContinent.test(data.continent) &&
      (expName.test(data.name) || (expName.test(data.id)))
    ) return data
  })
  return newData
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