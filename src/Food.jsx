function Food() {
  const food1 = "Orange";
  const food2 = "Apple";
  const food3 = "BigMelon";
  return (
    <ul>
      <li>NotAVariableFood</li>
      <li>{food1}</li>
      <li>{food2}</li>
      <li>{food3.toUpperCase()}</li>
    </ul>
  );
}
export default Food;
