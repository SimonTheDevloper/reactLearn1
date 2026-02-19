import { useState } from "react";
import Project2 from "./Projects/Project2.jsx";
import Project3 from "./Projects/Project3.jsx";
import Project4 from "./Projects/Project4.jsx";
import Project5 from "./Projects/Project5.jsx";

function App() {
  const [activeProject, setProject] = useState(null);

  function handleClick(projectnumber) {
    setProject(projectnumber);
  }
  return (
    <>
      {activeProject === 1 && <h1>This is Project 1</h1>}
      {activeProject === 2 && <Project2 />}
      {activeProject === 3 && <Project3 />}
      {activeProject === 4 && <Project4 />}
      {activeProject === 5 && <Project5 />}
      <button onClick={() => handleClick(1)}>Show Project 1</button>
      <button onClick={() => handleClick(2)}>Show Project 2</button>
      <button onClick={() => handleClick(3)}>Show Project 3</button>
      <button onClick={() => handleClick(4)}>Show Project 4</button>
    </>
  );
}

export default App;
