import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li><NavLink to="/" activeClassName="text-blue-500">Home</NavLink></li>
      <li><NavLink to="/flashcard" activeClassName="text-blue-500">Flashcard</NavLink></li>
      <li><NavLink to="/contact" activeClassName="text-blue-500">Contact</NavLink></li>
      <li><NavLink to="/faq" activeClassName="text-blue-500" >FAQ</NavLink></li>
     
    </>
  );

  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center ">
        <div>
          <img src="/image/logo.png" alt="Logo" className="h-8" />
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4 items-center">
            {navLinks}
            <button className="bg-blue-600 text-white px-4 py-1 rounded-3xl items-center">Login</button>
          </ul>
          
        </div>
        <div className="md:hidden">
          <button className="text-white">
            <svg className="h-6 w-6" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
