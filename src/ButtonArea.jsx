function ButtonArea({ handleClick }) {
  const projects = [
    { id: 1, title: "Project 1" },
    { id: 2, title: "Project 2" },
    { id: 3, title: "Project 3" },
    { id: 4, title: "Project 4" },
    { id: 5, title: "Project 5" },
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
