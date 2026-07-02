//si contact section
const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-slate-950 text-white px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">Lets connect</h2>
        <p className="text-slate-400 mt-4 text-sm sm:text-base">
          Open to data analyst roles, freelance work, and Collaboration
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 text-sm sm:text-base">
          <a href="mailto:misheckmwas97@gmail.com" className="text-emerald-400">
            Email
          </a>
          <a href="https://github.com" className="text-emerald-400">
            GitHub
          </a>
          <a href="https:linkdn.com" className="text-emerald-400">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};
export default Contact;
