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
  const projectComponents = {
    1: <h1>This is Project 1</h1>,
    2: <Project2 />,
    3: <Project3 />,
    4: <Project4 />,
    5: <Project5 />,
    6: <Project6 />,
    7: <Project7 />,
    8: <Project8 />,
    9: <Project9 />,
    10: <Project10 />,
  };

  return <>{projectComponents[activeProject]}</>;
}

export default ProjectArea;
