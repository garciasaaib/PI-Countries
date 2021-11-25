import { useState } from "react";
import { useSelector } from "react-redux";
import useCallCountries from "../../hooks/useCallCountries";

const MultiSelect = ({ input, setInput }) => {
  let countries = useSelector(store => store.countries.map(country => ({
    name: country.name, id: country.id
  })))
  
  useCallCountries()

  const [inputSearch, setInputSearch] = useState('')
  const handleInputSearch = (event) => {
    setInputSearch(event.target.value)
    console.log(inputSearch)
  }

  const handleAddCountry = (event) => {
    setInput({
      ...input,
      countries: [...input.countries, event.target.value]
    })
  }
  const handleDeleteCountry = (event) => {
    setInput({
      ...input,
      countries: input.countries.filter(country => country !== event.target.value)
    })
  }
  return (
    <div>
      <div>
        {input.countries.map((country, id) => <button type="button" onClick={handleDeleteCountry} key={id} value={country} >{country}</button>)}
      </div>
      <div>
        <input
          type="search"
          name="search"
          onChange={handleInputSearch}
          value={inputSearch}
          placeholder="Type a country"
          autoComplete="off"
        />
      </div>
      <select multiple name="countries" onChange={handleAddCountry} >
        {countries?.map(country => {
          if (!input.countries.includes(country.id)) {
            const inputRegExp = new RegExp(inputSearch, 'i')
            if (country.name.match(inputRegExp) || country.id.match(inputRegExp)) {
              return (
                <option key={country.id} value={country.id} >
                  {country.name}
                </option>
              )
            }
          }
        })}
      </select>
    </div>
  );
}

export default MultiSelect;