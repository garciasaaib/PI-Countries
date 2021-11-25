// hooks
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postActivity } from "../../store/actions"
// component
import MultiSelect from "./MultiSelect";

const ActivityForm = () => {
  // check if need call apicountries
  const dispatch = useDispatch()
  // get countries list
  

  const [inputs, setInputs] = useState({
    name: '',
    difficulty: "1",
    duration: "1",
    season: 'summer',
    countries: []
  })

  const handleInputChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    // validate
    event.preventDefault()
    if (!inputs.countries.length) return console.log("Add some countries")

    // send post
    dispatch(postActivity(inputs))
    console.log(inputs)
    //clean inputs
    setInputs({
      name: '',
      difficulty: 1,
      duration: 1,
      season: 'summer',
      countries: []
    })
  }


return (
  <div >

    <form className="form" onSubmit={handleSubmit}>

      <div className="form-input">
        <label>Name: </label>
        <input type="text" name="name" value={inputs.name} onChange={handleInputChange} required autoComplete="off" />
      </div>
      <div  className="form-input">
        <label>Difficulty: {inputs.difficulty}</label>
        <input type="range" name="difficulty" value={inputs.difficulty} min="1" max="5" onChange={handleInputChange} required />
      </div >
      <div  className="form-input">
        <label>Duration Weeks: {inputs.duration}</label>
        <input type="range" name="duration" min="1" max="20" value={inputs.duration} onChange={handleInputChange} required />
      </div>
      <div className="form-input form-select">
        <label>Season: </label>
        <select name="season" onChange={handleInputChange} required value={inputs.season}>
          <option value="summer">Summer</option>
          <option value="autumn">Autumn</option>
          <option value="winter">Winter</option>
          <option value="spring">Spring</option>
        </select>
      </div>
      <div className="form-input">
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