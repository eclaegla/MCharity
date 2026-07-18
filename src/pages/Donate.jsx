import { motion } from "framer-motion";
import {
  FaHeart,
  FaHandHoldingHeart,
  FaGift,
  FaUsers,
} from "react-icons/fa";

const Donate = () => {
  const impacts = [
    {
      icon: <FaHeart />,
      title: "Support Basic Needs",
      description:
        "Help provide essential support for vulnerable individuals and families.",
    },
    {
      icon: <FaGift />,
      title: "Create Opportunities",
      description:
        "Contribute to education, skills training, and empowerment programs.",
    },
    {
      icon: <FaUsers />,
      title: "Strengthen Communities",
      description:
        "Help build systems that create long-term positive change.",
    },
  ];

  return (
    <main className="bg-white">

      {/* Header */}
      <section className="bg-teal-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">
              Support Our Mission
            </h1>

            <p className="mt-6 text-lg text-teal-50 leading-7">
              Your support helps us create sustainable opportunities and
              provide care for people who need it most.
            </p>

          </motion.div>

        </div>
      </section>


      {/* Why Donate */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 items-center">


            <div>

              <span className="text-teal-700 font-semibold">
                WHY YOUR SUPPORT MATTERS
              </span>

              <h2 className="text-3xl font-bold mt-3 text-slate-900">
                Helping People Build Independent Futures
              </h2>

              <p className="mt-6 text-slate-600 leading-8">
                Donations allow us to develop programs that go beyond
                temporary assistance. We focus on creating opportunities,
                education, skills, and community support.
              </p>

              <p className="mt-5 text-slate-600 leading-8">
                Every contribution helps us move closer to a future where
                vulnerable people can access the resources they need to
                become independent.
              </p>

            </div>


            <div className="bg-slate-50 rounded-2xl p-3 sm:p-8">

              <FaHandHoldingHeart className="text-5xl text-teal-700" />

              <h3 className="text-2xl font-bold mt-6">
                Every Contribution Creates Impact
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                Together with donors, volunteers, and partners, we can build
                sustainable solutions for communities in need.
              </p>

            </div>


          </div>

        </div>

      </section>


      {/* Impact Cards */}
      <section className="bg-slate-50 py-20">

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

          <h2 className="text-3xl font-bold text-center">
            Where Your Support Goes
          </h2>


          <div className="grid md:grid-cols-3 gap-6 mt-12">

            {impacts.map((item) => (

              <motion.div
                key={item.title}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm"
              >

                <div className="text-3xl text-teal-700">
                  {item.icon}
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {item.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* Donation Options */}
      <section className="py-20">

        <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8 text-center">


          <h2 className="text-3xl font-bold">
            Ways To Support
          </h2>


          <p className="mt-5 text-slate-600">
            Choose the way you would like to contribute to our mission.
          </p>


          <div className="grid md:grid-cols-3 gap-6 mt-10">


            {[
              "Financial Donation",
              "Volunteer Your Skills",
              "Become a Partner",
            ].map((item) => (

              <div
                key={item}
                className="border border-slate-200 rounded-2xl p-6 hover:border-teal-700 transition"
              >

                <h3 className="font-semibold text-lg">
                  {item}
                </h3>

              </div>

            ))}


          </div>


        </div>

      </section>


      {/* CTA */}
      <section className="pb-20">

        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">

          <div className="bg-teal-700 rounded-3xl p-5 sm:p-10 text-center text-white">

            <h2 className="text-2xl font-bold">
              Together We Can Make A Difference
            </h2>

            <p className="mt-4 text-teal-50">
              Join us in creating lasting change and stronger communities.
            </p>


            <button
              className="mt-8 bg-white text-teal-700 px-7 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
              onClick={() => window.location.href = "/contact"} 
            >
              contact us to get involved
            </button>


          </div>

        </div>

      </section>


    </main>
  );
};

export default Donate;