/**Es practicamente el reducer de arrays, 
 * toma el store y retorna cualquier cosa que querramos
 * 
 * todo reducer tiene un action y un store,
 * store es el array y action es lo que le haremos a ese store, 
 * aunque el action regresa un formato de json
 */

// solo retorna el estado
import { actionTypes } from "../actions"
const initialState = {
  countries: [],
  country: {},
  filters: {
    filterByName: "",
    filterByContinent: "",
    filterByActivity: "",
    orderByName: "",
    orderByPopulation: "",
    hasChanged: ""
  },
  activities: [],
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.countries.callApi: {
      return {
        ...state,
        countries: action.payload,
      }
    }

    case actionTypes.country.callApi: {
      return {
        ...state,
        country: action.payload
      }
    }

    case actionTypes.countries.filter: {
      const { type, hasChanged,...filterUpdated } = action
      return {
        ...state,
        filters: { 
          ...state.filters, 
          ...filterUpdated,
          hasChanged
        },
      }
    }

    case actionTypes.countries.resetFilter: {
      return {
        ...state,
        filters: {...initialState.filters}
      }
    }

    case actionTypes.activity.callApi: {
      return {
        ...state,
        activities: action.payload,
      }
    }
    default: return { ...state }
  }
}
export default mainReducer