const cards = [
  {
    title: "Assignments",
    value: "04",
    description: "Pending assignments",
    icon: "📄",
  },
  {
    title: "Tasks",
    value: "11",
    description: "Upcoming tasks",
    icon: "✅",
  },
  {
    title: "Skill Matches",
    value: "08",
    description: "New opportunities",
    icon: "🤝",
  },
  {
    title: "AI Insights",
    value: "05",
    description: "Fresh recommendations",
    icon: "🧠",
  },
];

export default function OverviewCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-emerald-400 hover:bg-white/10 transition duration-300"
        >
          <div className="text-4xl mb-4">
            {card.icon}
          </div>

          <h3 className="text-xl font-semibold">
            {card.title}
          </h3>

          <h1 className="text-5xl font-black mt-4 text-emerald-400">
            {card.value}
          </h1>

          <p className="text-gray-400 mt-4">
            {card.description}
          </p>
        </div>
      ))}
    </section>
  );
}