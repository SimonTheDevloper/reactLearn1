function CounterBtn({ text, onClick }) {
  return (
    <button className="counterBtn" onClick={onClick}>
      {text}
    </button>
  );
}

export default CounterBtn;
