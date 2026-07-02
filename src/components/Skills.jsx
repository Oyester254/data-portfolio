//simple skillls without animation shit
const Skills = () => {
  const skills = [
    "Python",
    "SQL",
    "Power BI",
    "Alteryx",
    "Excel",
    "Nebula Graph",
    "Apache Superset",
  ];
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 bg-slate-950 text-white px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Skills</h2>
        {/*Skill Tags*/}
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-slate-800 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
