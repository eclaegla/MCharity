import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">


          {/* Brand */}
          <div>

            <Link
              to="/"
              className="text-2xl font-bold text-white"
            >
              ABDI<span className="text-teal-700"> IFA</span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Building sustainable solutions that support vulnerable
              communities, create opportunities, and help people achieve
              independence with dignity.
            </p>

          </div>


          {/* Navigation */}
          <div>

            <h3 className="text-white font-semibold mb-5">
              Explore
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <Link
                  to="/about"
                  className="hover:text-teal-400 transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/programs"
                  className="hover:text-teal-400 transition"
                >
                  Programs
                </Link>
              </li>

              <li>
                <Link
                  to="/proposal"
                  className="hover:text-teal-400 transition"
                >
                  Proposal
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-teal-400 transition"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>


          {/* Focus Areas */}
          <div>

            <h3 className="text-white font-semibold mb-5">
              Our Focus
            </h3>

            <ul className="space-y-3 text-sm text-slate-400">

              <li>Single Mothers Support</li>
              <li>Women Empowerment</li>
              <li>Elderly Care</li>
              <li>Community Development</li>

            </ul>

          </div>


          {/* Contact */}
          <div>

            <h3 className="text-white font-semibold mb-5">
              Connect
            </h3>

            <p className="text-sm text-slate-400">
              Addis Ababa, Ethiopia
            </p>

            <p className="mt-2 text-sm text-slate-400">
              info@abdiifa.org
            </p>


            {/* <div className="flex gap-3 mt-6">

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-teal-700 transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-teal-700 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-teal-700 transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800 hover:bg-teal-700 transition"
              >
                <FaTelegramPlane />
              </a>

            </div> */}

          </div>

        </div>


        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">

          <p>
            © {new Date().getFullYear()} ABDI IFA. All rights reserved.
          </p>

          <div className="flex gap-5">

            {/* <Link
              to="/privacy"
              className="hover:text-teal-400 transition"
            >
              Privacy
            </Link>

            <Link
              to="/terms"
              className="hover:text-teal-400 transition"
            >
              Terms
            </Link> */}

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;