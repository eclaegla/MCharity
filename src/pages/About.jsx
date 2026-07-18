import { motion } from "framer-motion";
import {
  FaHeart,
  FaHandsHelping,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const values = [
  {
    icon: <FaHeart />,
    title: "Dignity",
    description:
      "We believe every person deserves respect, compassion, and the opportunity to live with dignity.",
  },
  {
    icon: <FaHandsHelping />,
    title: "Empowerment",
    description:
      "We focus on creating opportunities that help people become independent and self-reliant.",
  },
  {
    icon: <FaLightbulb />,
    title: "Sustainable Solutions",
    description:
      "We work toward long-term solutions that address root causes instead of only temporary needs.",
  },
  {
    icon: <FaUsers />,
    title: "Community",
    description:
      "We believe lasting change happens when communities work together and support each other.",
  },
];


const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 10, behavior: 'smooth' });
  }, []);
  return (
    <main className="bg-white">

      {/* Introduction */}
      <section className=" text-teal-700 py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <h1 className="text-4xl md:text-5xl font-bold">
              About M Charity
            </h1>

            <p className="mt-6 text-lg leading-8 text-black">
              We are committed to creating sustainable opportunities for
              vulnerable communities by providing support, empowerment,
              and pathways toward independence.
            </p>

          </motion.div>

        </div>
      </section>


      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=900"
            alt="Community support"
            className="rounded-2xl shadow-md w-full h-[420px] object-cover"
          />


          <div>

            <span className="text-teal-700 font-semibold">
              OUR STORY
            </span>

            <h2 className="text-3xl font-bold mt-3 text-slate-900">
              Helping People Move Toward Independence
            </h2>

            <p className="mt-6 text-slate-600 leading-8">
              M Charity was created from the belief that vulnerable people
              need more than temporary assistance. They need opportunities,
              skills, resources, and a supportive community that helps them
              build a better future.
            </p>

            <p className="mt-5 text-slate-600 leading-8">
              Our focus is supporting single mothers,Prostitutes,vulnerable women, and
              unaccompanied elderly people by creating programs that address
              immediate challenges while building long-term independence.
            </p>

          </div>

        </div>
      </section>


      {/* Mission Vision */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">


          <div className="bg-white p-8 rounded-2xl shadow-sm">

            <h3 className="text-2xl font-bold text-teal-700">
              Our Mission
            </h3>

            <p className="mt-5 text-slate-600 leading-8">
              To support vulnerable individuals through sustainable programs
              that provide education, skills development, opportunities,
              and community support.
            </p>

          </div>


          <div className="bg-white p-8 rounded-2xl shadow-sm">

            <h3 className="text-2xl font-bold text-teal-700">
              Our Vision
            </h3>

            <p className="mt-5 text-slate-600 leading-8">
              A society where every person has access to opportunities,
              security, and the ability to build an independent and meaningful
              life.
            </p>

          </div>


        </div>
      </section>


      {/* Why We Exist */}
      <section className="py-20">

        <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">

          <span className="text-teal-700 font-semibold">
            WHY WE EXIST
          </span>

          <h2 className="text-3xl font-bold mt-3">
            Addressing Problems at Their Roots
          </h2>

          <p className="mt-6 text-slate-600 leading-8">
            Many vulnerable people face challenges that cannot be solved only
            through short-term support. Poverty, lack of skills, isolation,
            and limited opportunities require deeper solutions.
          </p>

          <p className="mt-5 text-slate-600 leading-8">
            Our approach focuses on creating pathways that help people develop
            confidence, skills, income opportunities, and stronger connections
            within their communities.
          </p>

        </div>

      </section>

    </main>
  );
};

export default About;