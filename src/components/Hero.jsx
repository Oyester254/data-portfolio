//this herosection creates first impression
const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center bg-slate-950 text-white px-4"
    >
      {/*Main Title*/}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
        Hi, I'm <span className="text-emerald-400"> Misheck</span>
      </h1>
      {/*Subtitle*/}
      <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-300">
        Data Analyst | Turning Data into decisions
      </p>
      {/*Description*/}
      <p>
        I build Insights from healthcare, finance, education and government data
        using Python, SQL, Power BI, Excel, Superset and More.
      </p>
      {/*Buttons*/}
      <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
        <a
          href="#projects"
          className="bg-emerald-500 px-4 py-2 rounded text-black font-semibold text-sm sm:text-base"
        >
          View Projects
        </a>
        <a
          href="https://github.com/Oyester254/healthcare-analytics-dashboard/blob/main/python/healthcare_analysis.ipynb"
          className="border border-emerald-500 px-4 py-2 rounded text-sm sm:text-base"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};
export default Hero;
