const Filterbar = () => {
  return (
    <div>
      <form>
        <input 
          type="text"
          placeholder="Country..."
        />
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
          <option>Polar</option>
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