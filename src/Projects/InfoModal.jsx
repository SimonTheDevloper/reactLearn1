function InfoModal({ onGotItClick }) {
  return (
    <div className="infoModal-overlay">
      <div className="infoModal-content">
        <h1 className="infoModal-title">
          Hey, cool that you're checking out my project “Project Project”
        </h1>

        <label className="infoModal-label">
          A quick note about my project:
        </label>

        <p className="infoModal-text">
          It`s a project I created while learning React. So it`s a small
          collection of several mini-projects designed to help me understand
          various React concepts.
        </p>

        <p className="infoModal-text">Made by Sim 🙉</p>

        <div className="infoModal-actions">
          <button className="infoModal-btn" onClick={onGotItClick}>
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
export default InfoModal;
