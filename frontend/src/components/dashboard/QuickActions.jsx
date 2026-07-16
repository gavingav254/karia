import { Link } from "react-router-dom";

const actions = [
  {
    title: "Assignment Intelligence",
    description: "Analyze assignments using AI",
    icon: "📄",
    color: "from-emerald-500 to-green-600",
    link: "/assignment",
  },
  {
    title: "KARIA GPT",
    description: "Chat with your AI academic assistant",
    icon: "🤖",
    color: "from-cyan-500 to-blue-600",
    link: "/chat",
  },
  {
    title: "KARIA Match",
    description: "Find careers matched to your skills",
    icon: "🤝",
    color: "from-purple-500 to-indigo-600",
    link: "/match",
  },
  {
    title: "Opportunities",
    description: "Discover internships, scholarships and gigs",
    icon: "💼",
    color: "from-orange-500 to-red-500",
    link: "/opportunities",
  },
];

export default function QuickActions() {
  return (
    <section className="mb-12">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-3xl font-black">
          ⚡ Quick Actions
        </h2>

        <p className="text-gray-400">
          Jump into any KARIA feature
        </p>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

        {actions.map((action) => (

          <Link key={action.title} to={action.link}>

            <div
              className={`bg-gradient-to-br ${action.color} rounded-3xl p-7 h-full shadow-xl hover:scale-105 transition duration-300 cursor-pointer`}
            >

              <div className="text-5xl mb-5">
                {action.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {action.title}
              </h3>

              <p className="mt-3 text-white/90 leading-7">
                {action.description}
              </p>

              <div className="mt-8 flex items-center justify-between">

                <span className="text-sm text-white/80">
                  Open Module
                </span>

                <span className="text-2xl">
                  →
                </span>

              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>
  );
}