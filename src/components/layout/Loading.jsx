import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <ClipLoader
          color="#0f766e"
          size={55}
        />

        <motion.h2
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
          }}
          className="mt-6 text-2xl font-bold text-teal-700"
        >
        ABDI IFA
        </motion.h2>

        <p className="mt-2 text-slate-500">
          Preparing your experience...
        </p>
      </motion.div>
    </div>
  );
};

export default Loading;