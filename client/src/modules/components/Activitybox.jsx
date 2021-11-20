const Activitybox = (activity) => {
  return (
    <div>
      <h4>{activity.name}</h4>
      <p>{activity.duration}</p>
      <p>{activity.difficulty}</p>
      <p>{activity.season}</p>
    </div>
  );
}

export default Activitybox;