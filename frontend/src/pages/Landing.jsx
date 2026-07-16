import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden relative">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-emerald-500/20 blur-[170px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[170px] rounded-full" />

      </div>

      {/* HERO */}

      <section className="relative min-h-screen flex items-center px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-semibold">

              🚀 AI Powered Student Platform

            </span>

            <h1 className="mt-8 text-8xl lg:text-9xl font-black bg-gradient-to-r from-white via-emerald-300 to-cyan-300 bg-clip-text text-transparent">

              K.A.R.I.A

            </h1>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight">

              Your AI Student Operating System

            </h2>

            <p className="mt-8 text-xl text-gray-400 leading-9 max-w-2xl">

              One intelligent workspace for university students.

              Analyze assignments.

              Chat with AI.

              Match your skills with opportunities.

              Build your future.

            </p>

            <div className="flex gap-5 mt-12">

              <Link to="/dashboard">

                <button className="bg-emerald-500 hover:bg-emerald-400 px-10 py-5 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-[0_0_40px_rgba(16,185,129,.45)]">

                  Launch Dashboard →

                </button>

              </Link>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="grid grid-cols-2 gap-6"
          >

            <motion.div
              whileHover={{ y: -8, scale: 1.04 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-xl"
            >

              <div className="text-5xl">📄</div>

              <h3 className="text-2xl font-bold mt-5">

                Assignment Intelligence

              </h3>

              <p className="mt-4 text-gray-400 leading-7">

                AI summaries, explanations,
                deadlines and study plans.

              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.04 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-xl"
            >

              <div className="text-5xl">🤖</div>

              <h3 className="text-2xl font-bold mt-5">

                KARIA GPT

              </h3>

              <p className="mt-4 text-gray-400 leading-7">

                Your intelligent university assistant.

              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.04 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-xl"
            >

              <div className="text-5xl">🤝</div>

              <h3 className="text-2xl font-bold mt-5">

                KARIA Match

              </h3>

              <p className="mt-4 text-gray-400 leading-7">

                AI career recommendations based on your skills.

              </p>

            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.04 }}
              className="bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-xl"
            >

              <div className="text-5xl">💼</div>

              <h3 className="text-2xl font-bold mt-5">

                Opportunities

              </h3>

              <p className="mt-4 text-gray-400 leading-7">

                Internships, scholarships,
                gigs and hackathons.

              </p>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-6xl font-black">

              Everything Students Need.
              <br />
              One Platform.

            </h2>

            <p className="mt-8 text-xl text-gray-400 max-w-3xl mx-auto leading-9">

              KARIA combines AI learning,
              career growth,
              academic productivity
              and opportunity discovery
              into one seamless experience.

            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <Link
              to="/dashboard"
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-emerald-400 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl">📊</div>

              <h3 className="text-2xl font-bold mt-6">
                Student Workspace
              </h3>

              <p className="mt-4 text-gray-400 leading-8">
                Your personalized dashboard with AI insights,
                reminders, assignments and productivity tools.
              </p>

              <div className="mt-8 text-emerald-400 font-semibold">
                Open →
              </div>
            </Link>

            <Link
              to="/assignment"
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-emerald-400 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl">📄</div>

              <h3 className="text-2xl font-bold mt-6">
                Assignment Intelligence
              </h3>

              <p className="mt-4 text-gray-400 leading-8">
                Upload assignments and instantly receive AI
                explanations, summaries and study plans.
              </p>

              <div className="mt-8 text-emerald-400 font-semibold">
                Analyze →
              </div>
            </Link>

            <Link
              to="/chat"
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl">🤖</div>

              <h3 className="text-2xl font-bold mt-6">
                KARIA GPT
              </h3>

              <p className="mt-4 text-gray-400 leading-8">
                Your intelligent assistant for coursework,
                coding, research and university life.
              </p>

              <div className="mt-8 text-cyan-400 font-semibold">
                Chat →
              </div>
            </Link>

            <Link
              to="/match"
              className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-purple-400 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl">🤝</div>

              <h3 className="text-2xl font-bold mt-6">
                KARIA Match
              </h3>

              <p className="mt-4 text-gray-400 leading-8">
                Match your skills with internships,
                freelance work and career opportunities.
              </p>

              <div className="mt-8 text-purple-400 font-semibold">
                Explore →
              </div>
            </Link>

          </div>

        </div>

      </section>

      <footer className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between">

          <div>

            <h2 className="text-3xl font-black">
              KARIA
            </h2>

            <p className="text-gray-400 mt-2">
              Intelligent tools for smarter university life.
            </p>

          </div>

          <div className="text-gray-500 text-sm mt-6 md:mt-0">
            © 2026 KARIA • Built for students.
          </div>

        </div>

      </footer>

    </main>
  );
}