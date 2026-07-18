import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-white">

      <div className="max-w-xl mx-auto px-5 text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >

          <h1 className="text-7xl font-bold text-teal-700">
            404
          </h1>

          <h2 className="mt-5 text-3xl font-bold text-slate-900">
            Page Not Found
          </h2>

          <p className="mt-4 text-slate-600 leading-7">
            The page you are looking for does not exist or may have been moved.
            Let's return to our mission and continue creating positive change.
          </p>


          <Link
            to="/"
            className="inline-flex items-center gap-3 mt-8 bg-teal-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-800 transition"
          >
            <FaHome />
            Back To Home
          </Link>


        </motion.div>

      </div>

    </main>
  );
};

export default NotFound;