import { PuffLoader } from "react-spinners"; // von einer libary

function LoadingSpinner() {
  const override = {
    display: "block",
    margin: "0 auto",
  };
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <PuffLoader
        color="#36d7b7"
        loading={true}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
      />
      <p>Loading weather data...</p>
    </div>
  );
}

export default LoadingSpinner;
