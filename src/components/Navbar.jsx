//simple navigation with scroll links with no routing
const Navbar = () => {
  return (
    <nav className="fixed w-full bg-slate-950 text-white z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between items-center p-4 gap-3 sm:gap-0">
        {/*logo*/}
        <h1 className="font-bold text-emerald-400 text-lg sm:text-base">
          Data Portfolio
        </h1>
        {/*navigation links*/}

        <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-center">
          <a href="#home" className="hover:text-emerald-400">
            Home
          </a>
          <a href="#about" className="hover:text-emerald-400">
            About
          </a>
          <a href="#skills" className="hover:text-emerald-400">
            Skills
          </a>
          <a href="#projects" className="hover:text-emerald-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-emerald-400">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
