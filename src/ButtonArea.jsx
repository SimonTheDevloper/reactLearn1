function ButtonArea({ handleClick }) {
  const projects = [
    { id: 1, title: "Project 1" },
    { id: 2, title: "Project 2" },
    { id: 3, title: "Project 3" },
    { id: 4, title: "Project 4" },
    { id: 5, title: "Project 5" },
    { id: 6, title: "Project 6" },
    { id: 7, title: "Project 7" },
    { id: 8, title: "Project 8" },
    { id: 9, title: "Project 9" },
    { id: 10, title: "Project 10" },
  ];
  return (
    <div>
      {projects.map((project) => (
        <button key={project.id} onClick={() => handleClick(project.id)}>
          {project.title}
        </button>
      ))}
    </div>
  );
}

export default ButtonArea;
