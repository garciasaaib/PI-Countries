import { useState } from "react";

const ActivityForm = () => {
  const [inputs, setInputs] = useState({
    name: '',
    dificulty: 1,
    duration: 1,
  })

  const handleSubmit= (event) => {
    event.preventDefault()
    console.log("holo")
  }
  return (
    <div>

      <form onSubmit={handleSubmit}>


        <input type="submit" value="Create Activity"/>
      </form>
    </div>
  );
}

export default ActivityForm;