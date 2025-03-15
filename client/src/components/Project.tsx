interface ProjectProps {
  title: string;
  liveLink: string;
  githubLink: string;
}

const Project: React.FC<ProjectProps> = ({ title, liveLink, githubLink }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <a href={liveLink} target="_blank" rel="noopener noreferrer">Live Application</a>
      <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
};

export default Project;
