import { useState } from "react";
import ButtonArea from "./ButtonArea.jsx";
import ProjectArea from "./ProjectArea.jsx";

function App() {
  const [activeProject, setProject] = useState(1);

  function handleClick(projectnumber) {
    setProject(projectnumber);
  }
  return (
    <>
      <ProjectArea activeProject={activeProject} />
      <footer>
        <ButtonArea handleClick={handleClick} activeProject={activeProject} />
      </footer>
    </>
  );
}
export default App;
