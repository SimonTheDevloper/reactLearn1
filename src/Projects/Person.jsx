function Person(props) {
  return (
    <div className="Project3card">
      <p className="Project3name">{props.name}</p>
      <button className="Project3deleteBtn" onClick={props.onDeleteClick}>
        Delete
      </button>
      <p className="Project3age">Age: {props.age}</p>
      <p className="Project3licence">
        Driver Licence:{" "}
        <span className={props.hasDriversLicence ? "yes" : "no"}>
          {props.hasDriversLicence ? "Yes" : "No"}
        </span>
      </p>
      <p className="Project3description" onClick={props.toggleDescription}>
        {props.selected ? props.description : "Click to see description"}
      </p>
    </div>
  );
}
export default Person;
