"use client";

import CalendlyEmbed from "@/components/section/contact/CalendlyEmbed";
import FAQ from "@/components/section/home/FAQ";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <main className="bg-(--gradient-main) text-(--text-primary) relative overflow-hidden">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-32 pb-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          We turn traffic into{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            revenue
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-neutral-400 mt-6 max-w-xl mx-auto"
        >
          Most websites look good. Ours make money.  
          If you're serious about scaling, let's talk.
        </motion.p>

        <motion.a
          href="#calendar"
          whileHover={{ scale: 1.05 }}
          className="inline-block mt-8 bg-orange-500 px-8 py-3 rounded-full text-white font-medium shadow-lg hover:shadow-orange-500/30 transition"
        >
          Book Strategy Call
        </motion.a>

        <p className="text-xs text-neutral-500 mt-3">
          Limited slots available this week
        </p>
      </section>

      {/* TRUST / SOCIAL PROOF */}
      <section className="max-w-5xl mx-auto px-6 pb-16 text-center">
        <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-400">
          <span>🚀 Helped 50+ founders</span>
          <span>📈 Avg 30% conversion boost</span>
          <span>⚡ Fast delivery cycles</span>
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-semibold text-center mb-12">
          How we work
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Deep Understanding",
              desc: "We break down your business, users, and revenue model first.",
            },
            {
              title: "Conversion Design",
              desc: "Every screen is built to guide users toward action.",
            },
            {
              title: "Fast Execution",
              desc: "No delays. We ship fast and iterate based on results.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="p-6 bg-(--bg-secondary) border border-white/10 rounded-2xl shadow-lg hover:shadow-orange-500/20 transition"
            >
              <p className="text-orange-500 font-bold mb-2">
                0{i + 1}
              </p>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-neutral-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MAIN GRID */}
      <section
        id="calendar"
        className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-10"
      >

        {/* CALENDLY */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-(--bg-secondary) border border-white/10 rounded-2xl p-6 shadow-xl"
        >
          <h2 className="text-xl font-semibold mb-3">
            Book a Strategy Call
          </h2>

          <ul className="text-sm text-neutral-400 mb-4 space-y-2">
            <li>✔ Clear product strategy</li>
            <li>✔ UX & conversion insights</li>
            <li>✔ Honest feedback (no BS)</li>
          </ul>

          <div className="h-[500px] rounded-xl overflow-hidden border border-white/10">
            <CalendlyEmbed />
          </div>
        </motion.div>

        {/* FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-(--bg-secondary) border border-white/10 rounded-2xl p-6 space-y-5 shadow-xl"
        >
          <div>
            <h2 className="text-xl font-semibold">
              Tell us about your project
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              Takes 30 seconds. We reply within 24 hours.
            </p>
          </div>

          {/* BASIC */}
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full bg-(--bg-main) border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full bg-(--bg-main) border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-orange-500"
          />

          {/* PROJECT */}
          <select
            required
            className="w-full bg-(--bg-main) border border-white/10 rounded-lg px-4 py-3"
          >
            <option value="">Project Type</option>
            <option>Website</option>
            <option>App</option>
            <option>UI/UX</option>
          </select>

          {/* BUDGET */}
          <select
            required
            className="w-full bg-(--bg-main) border border-white/10 rounded-lg px-4 py-3"
          >
            <option value="">Budget Range</option>
            <option>₹50k - ₹2L</option>
            <option>₹2L - ₹5L</option>
            <option>₹5L+</option>
          </select>

          {/* QUALIFICATION */}
          <select
            required
            className="w-full bg-(--bg-main) border border-white/10 rounded-lg px-4 py-3"
          >
            <option value="">Are you ready to invest?</option>
            <option>Yes</option>
            <option>Just exploring</option>
          </select>

          <textarea
            rows="4"
            placeholder="Describe your project..."
            className="w-full bg-(--bg-main) border border-white/10 rounded-lg px-4 py-3"
          />

          <motion.button
            whileTap={{ scale: 0.95 }}
            disabled={loading}
            className="w-full bg-orange-500 py-3 rounded-lg font-medium text-white shadow-lg hover:shadow-orange-500/30 transition disabled:opacity-70"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {success && (
            <p className="text-green-400 text-sm">
              Message sent. We'll reach out soon.
            </p>
          )}
        </motion.form>
      </section>

      {/* RISK REVERSAL */}
      <section className="text-center pb-24 px-6">
        <h3 className="text-xl font-semibold mb-3">
          No pressure. No BS.
        </h3>

        <p className="text-neutral-400 max-w-xl mx-auto">
          If we're not the right fit, we'll tell you directly.  
          You'll still leave with clarity on what to do next.
        </p>
      </section>
      <FAQ/>

      {/* FLOATING CTA */}
      <a
        href="https://wa.me/your-number"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 px-6 py-3 rounded-full shadow-xl text-white flex items-center gap-2 hover:scale-105 transition"
      >
        💬 Talk to us
      </a>
    </main>
  );
}