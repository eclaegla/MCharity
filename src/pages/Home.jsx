import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaUsers,
  FaHeart,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import { useEffect } from "react";

const supports = [
  {
    icon: <FaHeart />,
    title: "Single Mothers",
    description:
      "Supporting single mothers with opportunities, education, and sustainable pathways to financial independence.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Prostitutes and Vulnerable Women",
    description:
      "Providing a respectful environment where women can access resources, training, and long-term support.",
  },
  {
    icon: <FaUsers />,
    title: "Unaccompanied Elderly",
    description:
      "Helping elderly people live with dignity through community care, essential services, and companionship.",
  },
];

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <main className="bg-white">

      {/* Welcome */}
<section className="bg-white text-teal-700 h-screen">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10">

    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: .7 }}
      className="max-w-3xl"
    >
      {/* Changed badge bg to a subtle teal tint and text to dark teal */}
      {/* <span className="inline-block bg-teal-50 px-4 py-2 rounded-full text-sm font-medium text-teal-800">
        Together We Can Create Lasting Change
      </span> */}

      <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
        Building Stronger Communities Through Sustainable Solutions
      </h1>

      {/* Changed body text to a slightly softer teal/gray for readability on white */}
      <p className="mt-6 text-lg text-slate-600 leading-8">
        M Charity believes real change happens when people gain
        opportunities, independence, and hope. Our mission is to create
        long-term solutions for single mothers, prostitutes ,vulnerable women, and
        unaccompanied elderly people.
      </p>

      <div className="flex flex-wrap gap-4 mt-8">
        {/* Main button: filled teal background with white text */}
        <Link
          to="/proposal"
          className="bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-800 transition"
        >
          Read Our Proposal
        </Link>

        {/* Outline button: teal border and text, fills with teal on hover */}
        <Link
          to="/about"
          className="border border-teal-700 text-teal-700 px-6 py-3 rounded-lg hover:bg-teal-700 hover:text-white transition"
        >
          Learn More
        </Link>
      </div>
    </motion.div>

  </div>
</section>
     
      {/* About */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900"
              alt="Community"
              className="rounded-2xl shadow-md object-cover w-full h-[420px]"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >
            <span className="text-teal-700 font-semibold">
              ABOUT M CHARITY
            </span>

            <h2 className="text-3xl font-bold mt-3 text-slate-900">
              Creating Opportunities Instead of Temporary Solutions
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              Our vision goes beyond providing immediate assistance. We believe
              in empowering individuals through education, skills development,
              employment opportunities, and community support so they can build
              independent and fulfilling lives.
            </p>

            <p className="mt-5 text-slate-600 leading-8">
              By addressing the root causes of poverty and isolation, we aim to
              create stronger communities where every person has the chance to
              thrive with dignity.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-teal-700 font-semibold hover:gap-3 transition-all"
            >
              Learn More
              <FaArrowRight />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Who We Support */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto">
            <span className="text-teal-700 font-semibold">
              WHO WE SUPPORT
            </span>

            <h2 className="text-3xl font-bold mt-3">
              Every Person Deserves Hope and Opportunity
            </h2>

            <p className="mt-5 text-slate-600 leading-8">
              Our programs focus on vulnerable members of the community who need
              sustainable support and opportunities for a better future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

            {supports.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -8 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
              >
                <div className="w-16 h-16 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center text-2xl">
                  {item.icon}
                </div>

                <h3 className="mt-6 text-xl font-semibold">
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

      {/* Continue in Part 2... */}

            {/* Our Long-Term Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto">
            <span className="text-teal-700 font-semibold">
              OUR APPROACH
            </span>

            <h2 className="text-3xl font-bold mt-3 text-slate-900">
              Creating Permanent Solutions, Not Temporary Relief
            </h2>

            <p className="mt-5 text-slate-600 leading-8">
              Our goal is to help people move from vulnerability to
              independence through a structured long-term approach.
            </p>
          </div>


          <div className="grid md:grid-cols-4 gap-6 mt-14">

            {[
            // "Emergency Support",
              "Skills Development",
              "Employment Opportunities",
              "Independent Living",
            ].map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-slate-50 p-6 rounded-2xl text-center"
              >
                <div className="w-10 h-10 mx-auto rounded-full bg-teal-700 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>

                <h3 className="mt-5 font-semibold text-lg">
                  {step}
                </h3>
              </motion.div>
            ))}

          </div>

        </div>
      </section>


      {/* Programs */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center">
            <span className="text-teal-700 font-semibold">
              OUR PROGRAMS
            </span>

            <h2 className="text-3xl font-bold mt-3">
              Areas Where We Create Impact
            </h2>
          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

            {[
              "Education & Training",
              "Healthcare Support",
              "Housing Assistance",
              "Job Opportunities",
              "Small Business Support",
              "Community Care",
            ].map((program) => (
              <div
                key={program}
                className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold">
                  {program}
                </h3>

                <p className="mt-3 text-slate-600 leading-7">
                  Building sustainable opportunities through community-based
                  programs and support.
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* Proposal */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-2 sm:px-5 sm:px-6 lg:px-8">

          <div className="bg-teal-700 rounded-3xl p-8 md:p-12 text-white text-center">

            <h2 className="text-xl sm:text-2xl font-bold">
              Read Our Long-Term Proposal
            </h2>

            <p className="mt-5 text-teal-50 leading-7 sm:leading-8 max-w-2xl mx-auto">
              Our proposal explains our vision, strategy, and sustainable plan
              to support vulnerable communities and create lasting independence.
            </p>


            <Link
              to="/proposal"
              className="inline-block mt-8 bg-white text-teal-700 px-7 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
            >
              View Proposal
            </Link>

          </div>

        </div>
      </section>


      {/* Get Involved */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="text-center">
            <h2 className="text-3xl font-bold">
              Be Part of the Change
            </h2>

            <p className="mt-4 text-slate-600">
              Everyone can contribute to building stronger communities.
            </p>
          </div>


          <div className="grid md:grid-cols-3 gap-6 mt-12">

            {[
              {
                title: "Volunteer",
                text: "Share your skills and time to support people in need.",
                link: "/contact",
              },
              {
                title: "Donate",
                text: "Support programs that create meaningful impact.",
                link: "/donate",
              },
              {
                title: "Partner",
                text: "Work with us to create sustainable solutions.",
                link: "/contact",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 text-center shadow-sm"
              >
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {item.text}
                </p>

                <Link
                  to={item.link}
                  className="inline-block mt-6 text-teal-700 font-semibold"
                >
                  Learn More →
                </Link>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* Contact CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">

          <h2 className="text-3xl font-bold text-slate-900">
            Together We Can Build a Better Future
          </h2>

          <p className="mt-5 text-slate-600 leading-8">
            Join our mission to create opportunities, restore dignity,
            and support vulnerable communities.
          </p>

          <Link
            to="/contact"
            className="inline-block mt-8 bg-teal-700 text-white px-7 py-3 rounded-lg font-semibold hover:bg-teal-800 transition"
          >
            Contact Us
          </Link>

        </div>
      </section>

    </main>
  );
}