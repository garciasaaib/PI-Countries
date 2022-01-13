const Activitybox = (activity) => {
  return (
    <div className="activitybox">
      <h3>{activity.name}</h3>
      <p>{activity.duration}</p>
      <p>{activity.difficulty}</p>
      <p>{activity.season}</p>
    </div>
  );
}

export default Activitybox;