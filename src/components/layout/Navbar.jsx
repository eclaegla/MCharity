import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  //{ name: "Support", path: "/support" },
 // { name: "Programs", path: "/programs" },
  { name: "Proposal", path: "/proposal" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100">

      <nav className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 h-20 flex items-center justify-between border-b-1 border-teal-700">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-teal-700"
        >
          ABDI {' '}<span className="text-slate-900">IFA</span>
        </Link>


        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">

          {links.map((link) => (
            <li key={link.name}>

              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-teal-700"
                      : "text-slate-600 hover:text-teal-700"
                  }`
                }
              >
                {link.name}
              </NavLink>

            </li>
          ))}

        </ul>


        {/* Desktop Button */}
        <Link
          to="/donate"
          className="hidden lg:block bg-teal-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-teal-800 transition"
        >
          Donate
        </Link>


        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-2xl text-slate-800"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>

      </nav>


      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t bg-white">

          <div className="px-5 py-5 space-y-4">

            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block text-sm font-medium ${
                    isActive
                      ? "text-teal-700"
                      : "text-slate-600"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}


            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="block text-center bg-teal-700 text-white py-3 rounded-lg font-medium"
            >
              Donate
            </Link>

          </div>

        </div>
      )}

    </header>
  );
};

export default Navbar;