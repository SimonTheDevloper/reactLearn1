import Project2 from "./Projects/Project2.jsx";
import Project3 from "./Projects/Project3.jsx";
import Project4 from "./Projects/Project4.jsx";
import Project5 from "./Projects/Project5.jsx";
import Project6 from "./Projects/Project6.jsx";
import Project7 from "./Projects/Project7.jsx";
import Project8 from "./Projects/Project8.jsx";
import Project9 from "./Projects/Project9.jsx";
import Project10 from "./Projects/Project10.jsx";

function ProjectArea({ activeProject }) {
  return (
    <>
      {activeProject === 1 && <h1>This is Project 1</h1>}
      {activeProject === 2 && <Project2 />}
      {activeProject === 3 && <Project3 />}
      {activeProject === 4 && <Project4 />}
      {activeProject === 5 && <Project5 />}
      {activeProject === 6 && <Project6 />}
      {activeProject === 7 && <Project7 />}
      {activeProject === 8 && <Project8 />}
      {activeProject === 9 && <Project9 />}
      {activeProject === 10 && <Project10 />}
    </>
  );
}

export default ProjectArea;
