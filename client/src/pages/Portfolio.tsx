import Project from '../components/Project';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Project
        title="React App"
        liveLink="https://github.com/Jamilett/React-Portfolio"
        githubLink="https://github.com/Jamilett/React-Portfolio"
      />

      <Project
        title="ReadMe Generator"
        liveLink="https://github.com/Jamilett/Professional-README-Generator"
        githubLink="https://github.com/Jamilett/Professional-README-Generator"
      />

    </section>
  );
};

export default Portfolio;
