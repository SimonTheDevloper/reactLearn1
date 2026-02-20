function Person(props) {
  return (
    <div className="person-card" onClick={props.onClick}>
      <p className="person-name">Name: {props.name}</p>
      <p className="person-age">Age: {props.age}</p>
      <p className="person-licence">
        Driver Licence:
        <span className={props.hasDriversLicence ? "yes" : "no"}>
          {props.hasDriversLicence ? "Yes" : "No"}
        </span>
      </p>
      <p>{props.selected ? props.description : "Click to see description"}</p>
    </div>
  );
}

export default Person;
