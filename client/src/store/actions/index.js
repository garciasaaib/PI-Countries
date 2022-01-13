import { api } from '../../utils/constants'

// TYPES
export const actionTypes = {
  countries: {
    callApi: "CALL_COUNTRIES_API",
    filter: "FILTER_COUNTRIES_LIST",
    resetFilter: "RESET_FILTER_LIST",
    order: "ORDER_COUNTRIES_LIST",
  },
  country: {
    callApi: "CALL_COUNTRY_API_DETAIL",
    get: "GET_COUNTRY_DATA",
  },
  activity: {
    add: "ADD_ACTIVITY_DB",
    callApi: "CALL_ACTIVITY_API"
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
        dispatch({
          type: actionTypes.country.callApi,
          payload: result
        })
      })
  }
}

export const getActivities = () => {
  return (dispatch) => {
    return fetch(api.activityList())
      .then(result => result.json())
      // .then(result => console.log(result))
      .then(result => {
        dispatch({
          type: actionTypes.activity.callApi,
          payload: result
        })
      })
  }
}
export const postActivity = (inputs) => {
  return async () => {
    await fetch(api.createActivity,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors',
        body: JSON.stringify(inputs),
      })
      .then(data => console.log(data))
      .then(data => getCountries())
  }
}

export const setFilters = (action, value) => {
  return {
    type: actionTypes.countries.filter,
    [action]: value,
    hasChanged: action
  }
}

export const resetFilters = () => {
  return {
    type: actionTypes.countries.resetFilter
  }
}
