import { projects } from "../data/project";
import ProjectCard from "./ProjectCard";
//Projects sections renders all project cards dynamically
const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 bg-slate-900 text-white px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10">
          Featured Projects
        </h2>
        {/*Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
