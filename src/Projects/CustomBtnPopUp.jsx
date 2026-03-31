function CustomBtnPopUp({
  newLabel,
  newValue,
  setNewLabel,
  setNewValue,
  onSave,
  onCancel,
}) {
  return (
    <div className="customBtnPopUp-overlay">
      <div className="customBtnPopUp-content">
        <h3>create new Button</h3>
        <input
          type="text"
          placeholder="Button name"
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
        />
        <input
          type="text"
          placeholder="action for example +67 or *2"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        <div className="customBtnPopUp-actions">
          <button className="saveBtn" onClick={onSave}>
            save
          </button>
          <button className="cancelBtn" onClick={onCancel}>
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}
export default CustomBtnPopUp;
