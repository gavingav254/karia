import { dashboardStats } from "../../data/appData";

const cards = [
  {
    title: "Assignments",
    value: dashboardStats.assignments,
    icon: "📄",
    color: "from-emerald-500 to-green-600",
    subtitle: "Pending analysis",
  },
  {
    title: "AI Insights",
    value: dashboardStats.insights,
    icon: "🧠",
    color: "from-cyan-500 to-blue-600",
    subtitle: "Generated today",
  },
  {
    title: "Skill Matches",
    value: dashboardStats.matches,
    icon: "🤝",
    color: "from-purple-500 to-indigo-600",
    subtitle: "Career matches",
  },
  {
    title: "Opportunities",
    value: dashboardStats.opportunities,
    icon: "💼",
    color: "from-orange-500 to-red-500",
    subtitle: "Available now",
  },
];

export default function OverviewCards() {
  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">

      {cards.map((card) => (

        <div
          key={card.title}
          className={`bg-gradient-to-r ${card.color} rounded-3xl p-7 shadow-xl hover:scale-105 transition duration-300`}
        >

          <div className="flex justify-between items-center">

            <div>

              <p className="text-white/80 text-sm">
                {card.title}
              </p>

              <h2 className="text-5xl font-black mt-2">
                {card.value}
              </h2>

              <p className="mt-3 text-white/80 text-sm">
                {card.subtitle}
              </p>

            </div>

            <div className="text-5xl">
              {card.icon}
            </div>

          </div>

        </div>

      ))}

    </section>
  );
}