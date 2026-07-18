import { motion } from "framer-motion";
import { FaFilePdf, FaDownload } from "react-icons/fa";
import { useEffect } from "react";

const Proposal = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="bg-white">

      {/* Header */}
      <section className="bg-teal-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold">
              Our Long-Term Proposal
            </h1>

            <p className="mt-6 text-lg text-teal-50 leading-8">
              Discover our sustainable strategy to support vulnerable
              communities and create pathways toward independence.
            </p>
          </motion.div>

        </div>
      </section>


      {/* Proposal Introduction */}
      <section className="py-20">

        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center">

            <FaFilePdf className="mx-auto text-5xl text-teal-700" />

            <h2 className="mt-6 text-3xl font-bold text-slate-900">
              Sustainable Community Development Plan
            </h2>

            <p className="mt-5 text-slate-600 leading-8">
              Our proposal explains our vision, objectives, implementation
              approach, and long-term strategy for creating meaningful and
              lasting change.
            </p>

          </div>


          {/* PDF Viewer */}
          <div className="mt-12 border rounded-2xl overflow-hidden shadow-sm">

            <iframe
              src="/proposal.pdf"
              title="Charity Proposal"
              className="w-full h-[700px]"
            />

          </div>


          {/* Download */}
          <div className="text-center mt-8">

            <a
              href="/proposal.pdf"
              download
              className="inline-flex items-center gap-3 bg-teal-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-800 transition"
            >
              <FaDownload />
              Download Proposal
            </a>

          </div>

        </div>

      </section>


      {/* Highlights */}
      <section className=" py-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          {/* <h2 className="text-3xl font-bold text-center">
            Key Focus Areas
          </h2> */}


          <div className="grid md:grid-cols-3 gap-6 mt-12">

            {[
             // "Empowerment and Skills Development",
             // "Community-Based Support Systems",
             // "Long-Term Financial Independence",
            ].map((item) => (

              <div
                key={item}
                className="bg-white p-6 rounded-2xl shadow-sm"
              >
                <h3 className="font-semibold text-lg">
                  {item}
                </h3>
              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
};

export default Proposal;