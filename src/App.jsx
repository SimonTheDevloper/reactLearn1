import { useState } from "react";
import ButtonArea from "./ButtonArea.jsx";
import ProjectArea from "./ProjectArea.jsx";

function App() {
  const [activeProject, setProject] = useState(null);

  function handleClick(projectnumber) {
    setProject(projectnumber);
  }
  return (
    <>
      <ProjectArea activeProject={activeProject} />
      <footer>
        <ButtonArea handleClick={handleClick} />
      </footer>
    </>
  );
}

export default App;
