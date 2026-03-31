import { useEffect, useState } from "react";
import InfoModal from "./InfoModal.jsx";

function Startpage() {
  const [showInfoModal, setShowInfoModal] = useState(false);
  useEffect(() => {
    const schonGeladen = sessionStorage.getItem("ersterAufruf");
    if (!schonGeladen) {
      setShowInfoModal(true);
      sessionStorage.setItem("ersterAufruf", "true");
    }
  }, []); // ist leer, da es nur beim 1. Mal und einmaal passieren soll.
  return (
    <>
      <h1>This is Project 1</h1>
      {showInfoModal && (
        <InfoModal onGotItClick={() => setShowInfoModal(false)} />
      )}
    </>
  );
}
export default Startpage;
