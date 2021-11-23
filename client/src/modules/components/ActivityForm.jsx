import { useState } from "react";
import MultiSelect from "./MultiSelect";

const ActivityForm = () => {
  
  const [inputs, setInputs] = useState({
    name: '',
    difficulty: 1,
    duration: 1,
    season: '',
    countries: []
  })

  const handleInputChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(!inputs.countries.length) {
      console.log("Add some countries")
      return;
    }
    console.log(inputs)
    setInputs({
      name: '',
      difficulty: 1,
      duration: 1,
      season: '',
      countries: []
    })
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>

        <div>
          <label>Name: </label>
          <input type="text" name="name" value={inputs.name} onChange={handleInputChange} required autoComplete="off"/>
        </div>
        <div>
          <label>Difficulty: {inputs.difficulty}</label>
          <input type="range" name="difficulty" value={inputs.difficulty} min="1" max="5" onChange={handleInputChange} required />
        </div>
        <div>
          <label>Duration Weeks: {inputs.duration}</label>
          <input type="range" name="duration" min="1" max="20" value={inputs.duration} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Season: </label>
          <select name="season" onChange={handleInputChange} required>
            <option value="summer">Summer</option>
            <option value="autumn">Autumn</option>
            <option value="winter">Winter</option>
            <option value="spring">Spring</option>
          </select>
        </div>
        <div>
          <label>Countries: </label>
          <MultiSelect 
            input={inputs} 
            setInput={setInputs}
            handlerChange={handleInputChange}
            name="countries"
            required="required"
          />
        </div>
        <input type="submit" value="Create Activity" />
      </form>
    </div>
  );
}

export default ActivityForm;