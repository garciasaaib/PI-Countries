// const host= "http://localhost/3001"
const host = "http://localhost:3001"

export const api = {
  countriesList: (name) => `${host}/countries${name ? `?name=${name}` : ''}`,
  countryDetail: (code) => `${host}/countries/${code}`, 
  createActivity: `${host}/activity`,
}
