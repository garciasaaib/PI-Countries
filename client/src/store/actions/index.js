import { api } from '../../utils/constants'

// TYPES
export const actionTypes = {
  countries: {
    callApi: "CALL_COUNTRIES_API",
    filter: "FILTER_COUNTRIES_LIST",
    order: "ORDER_COUNTRIES_LIST",
  },
  country: {
    callApi: "CALL_COUNTRY_API_DETAIL",
    get: "GET_COUNTRY_DATA",
  },
  activity: {
    add: "ADD_ACTIVITY_DB"
  }
}

export const getCountries = (name) => {
  return (dispatch) => {
    return fetch(api.countriesList(name))
      .then(result => result.json())
      .then(result => {
        dispatch({
          type: actionTypes.countries.callApi,
          payload: result
        })
      })
  }
}

export const getCountry = (id) => {
  return (dispatch) => {
    return fetch(api.countryDetail(id))
      .then(result => result.json())
      .then(result => {
        console.log(result)
        dispatch({
          type: actionTypes.country.callApi,
          payload: result
        })
      })
  }
}