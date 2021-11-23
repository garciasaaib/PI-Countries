/**Es practicamente el reducer de arrays, 
 * toma el store y retorna cualquier cosa que querramos
 * 
 * todo reducer tiene un action y un store,
 * store es el array y action es lo que le haremos a ese store, 
 * aunque el action regresa un formato de json
 */

// solo retorna el estado
import {actionTypes} from "../actions"
const initialState = {
  countries: [],
  country: {},
  message: ''
}

const mainReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {

    case actionTypes.countries.callApi: {
      return {
        ...state,
        countries: payload
      }
    }

    case actionTypes.country.callApi: {
      return {
        ...state,
        country: payload
      }
    }

    default: return {...state}
  }
}
export default mainReducer