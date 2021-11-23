import { useState } from "react";
const Filterbar = () => {
  const [filterName, setFilterName] = useState('')

  const handleFilterName = event => {
    
  }
  return (
    <div>
      <form>
      <input 
          onChange={(event) => setFilterName(event.target.value)}
          type="text"
          placeholder="Country name..."
        />
        <input type="submit" value="filter" />
      </form>


      <div>
        <label htmlFor="">Continent</label>
        <select name="continent" id="">
          <option>All</option>
          <option>Africa</option>
          <option>Asia</option>
          <option>America</option>
          <option>Europe</option>
          <option>Oceania</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="">Order by Country</label>
        <select name="" id="">
          <option></option>
          <option>Asc</option>
          <option>Des</option>
        </select>
      </div>

      <div>
        <label htmlFor="">Order by Population</label>
        <select name="" id="">
          <option></option>
          <option>Asc</option>
          <option>Des</option>
        </select>
      </div>
    </div>
  );
}

export default Filterbar;