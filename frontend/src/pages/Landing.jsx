import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-hidden">

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">

        <div className="absolute w-[500px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full"></div>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[0.4em] text-emerald-400 text-sm mb-6"
        >
          (Knowledge • Assistance • Resources • Intelligence • Academic Advancement)
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-7xl md:text-8xl font-black mb-6"
        >
          KARIA
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-5xl font-bold max-w-5xl leading-tight"
        >
          The AI Operating System
          <br />
          for University Students
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-gray-400 text-lg max-w-3xl leading-8"
        >
          One intelligent platform that helps students manage academics,
          organize collaboration, discover opportunities, and transform
          their skills into income.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-wrap justify-center gap-5 mt-12"
        >
          <Link
            to="/dashboard"
            className="px-8 py-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition font-semibold"
          >
            Launch Dashboard
          </Link>

          <Link
            to="/match"
            className="px-8 py-4 rounded-xl border border-white/20 hover:border-emerald-400 transition"
          >
            Explore KARIA Match
          </Link>
        </motion.div>

      </section>

      {/* Features */}

      <section className="py-24 px-6 max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center mb-16">
          Everything Students Need.
          <br />
          One Platform.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <Link
            to="/dashboard"
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-emerald-400 hover:bg-white/10 transition block"
          >
            <h3 className="text-2xl font-bold mb-4">
              📊 Smart Dashboard
            </h3>

            <p className="text-gray-400">
              Assignments, reminders, recommendations and opportunities in one workspace.
            </p>
          </Link>

          <Link
            to="/assignment"
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-emerald-400 hover:bg-white/10 transition block"
          >
            <h3 className="text-2xl font-bold mb-4">
              📄 Assignment Intelligence
            </h3>

            <p className="text-gray-400">
              Upload assignments and receive explanations, timelines and study plans.
            </p>
          </Link>

          <Link
            to="/chat"
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-emerald-400 hover:bg-white/10 transition block"
          >
            <h3 className="text-2xl font-bold mb-4">
              💬 Group Chat Intelligence
            </h3>

            <p className="text-gray-400">
              Turn long conversations into summaries, deadlines and action items.
            </p>
          </Link>

          <Link
            to="/match"
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-emerald-400 hover:bg-white/10 transition block"
          >
            <h3 className="text-2xl font-bold mb-4">
              💼 KARIA Match
            </h3>

            <p className="text-gray-400">
              Match skilled students with clients through intelligent recommendations instead of traditional CVs.
            </p>
          </Link>

        </div>

      </section>

    </main>
  );
}