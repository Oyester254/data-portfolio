//This is a reusable Component
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-900 rounded-lg overflow-hidden shadow-lg">
      {/*Image */}
      <img
        src={project.image}
        alt={project.title}
        className="h-56 sm:h-64 md:h-72 w-full object-cover"
      />
      {/*Content */}
      <div className="p-3 sm:p-4">
        <h3 className="text-lg sm:text-xl font-bold text-white">
          {project.title}
        </h3>
        <p className="text-slate-400 mt-2 text-xs sm:text-sm">
          {project.description}
        </p>
        {/*Tools*/}
        <div className="flex gap-2 mt-3 flex-wrap">
          {project.tools.map((tool, i) => (
            <span
              key={i}
              className="text-[10px] sm:text-xs bg-slate-600 px-2 py-1 rounded"
            >
              {tool}
            </span>
          ))}
        </div>
        {/*Button */}
        <a
          href={project.github}
          className="inline-block mt-4 text-emerald-400 text-xs sm:text-sm"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};
export default ProjectCard;
