import { useState } from "react";
import CopyModal from "./CopyModal";

function Project4() {
  const [randomColor, setRandomColor] = useState("rgb(195, 255, 246)");
  const [showCopyModal, setShowCopyModal] = useState(false);

  const handleCopy = (rgb) => {
    navigator.clipboard.writeText(rgb);
    alert("Copied");
  };

  function generateRandomRGB() {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);

    return `rgb(${randomRed},${randomGreen},${randomBlue})`;
  }
  function handleClickBtn() {
    const rgb = generateRandomRGB();
    setRandomColor(rgb);
  }
  return (
    <div
      className="random-color-container projectBox"
      style={{ backgroundColor: randomColor }}
    >
      <button className="random-color-btn" onClick={handleClickBtn}>
        Generate Random Color
      </button>
      <button className="info-btn" onClick={() => setShowCopyModal(true)}>
        <img
          src="https://cdn-icons-png.flaticon.com/128/545/545674.png"
          alt="info"
        />
      </button>
      <h3 className="random-color-label">RGB Color:</h3>
      <h1
        className="random-color-value"
        onClick={() => handleCopy(randomColor)}
      >
        {randomColor}
      </h1>
      {showCopyModal && (
        <CopyModal onGotItClick={() => setShowCopyModal(false)} />
      )}
    </div>
  );
}
export default Project4;
