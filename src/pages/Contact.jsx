import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
  import {toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.message.trim().length < 15) {
    // alert("Please write a more detailed message.");
      toast.error("Please write a more detailed message.");
      return;
    }

    setStatus("loading");

    const BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    if (!BOT_TOKEN || !CHAT_ID) {
      console.error("Missing Telegram credentials.");
      setStatus("error");
      return;
    }

    const text = `
📩 M CHARITY CONTACT

━━━━━━━━━━━━━━

👤 Name
${formData.name}

📧 Email
${formData.email}

📂 Subject
${formData.subject}

💬 Message

${formData.message}

━━━━━━━━━━━━━━
    `;

    try {
      const res = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text,
          }),
        }
      );

      if (res.ok) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <main className="bg-white">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              Let's Work Together
            </h2>

            <p className="mt-5 text-slate-600 leading-8">
              Whether you would like to volunteer, partner with us, support
              our mission, or simply ask a question, we would be happy to
              hear from you.
            </p>

            <div className="space-y-6 mt-10">
              <div className="flex gap-4 items-start">
                <div className="bg-teal-100 text-teal-700 p-4 rounded-lg mt-1">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-slate-600">info@mcharity.org</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-teal-100 text-teal-700 p-4 rounded-lg mt-1">
                  <FaPhone />
                </div>

                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-slate-600">+251 900 000 000</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-teal-100 text-teal-700 p-4 rounded-lg mt-1">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-slate-600">Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <form
            onSubmit={handleSubmit}
            className=" md:p-6 sm:p-8 rounded-2xl space-y-5"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status === "loading"}
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border outline-none focus:border-teal-700 disabled:opacity-60"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status === "loading"}
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-lg border outline-none focus:border-teal-700 disabled:opacity-60"
            />

            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={status === "loading"}
              className="w-full px-4 py-3 rounded-lg border outline-none focus:border-teal-700 disabled:opacity-60"
            >
              <option value="">Select Subject</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Donation">Donation</option>
              <option value="Partnership">Partnership</option>
              {/* <option value="Proposal">Proposal</option> */}
            </select>

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={status === "loading"}
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-lg border outline-none focus:border-teal-700 disabled:opacity-60"
            />

            {status === "success" && (
              <div className="rounded-lg bg-green-50 border border-green-200 text-green-700 p-4">
                Thank you for contacting M Charity. We have received your
                message.
              </div>
            )}

            {status === "error" && (
              <div className="rounded-lg bg-red-50 border border-red-200 text-red-700 p-4">
                Something went wrong. Please try again.
              </div>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-teal-700 text-white py-3 rounded-lg font-medium hover:bg-teal-800 transition disabled:opacity-60"
            >
              {status === "loading" && "Sending..."}
              {status === "success" && "Message Sent ✓"}
              {status === "error" && "Try Again"}
              {status === "idle" && "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;