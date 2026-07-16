const activities = [
  {
    icon: "📄",
    title: "Assignment analyzed",
    time: "2 minutes ago",
    color: "bg-emerald-500",
  },
  {
    icon: "🤖",
    title: "KARIA GPT answered your research question",
    time: "8 minutes ago",
    color: "bg-cyan-500",
  },
  {
    icon: "🤝",
    title: "New 98% internship match found",
    time: "15 minutes ago",
    color: "bg-purple-500",
  },
  {
    icon: "💼",
    title: "Google Gemma Hackathon recommended",
    time: "1 hour ago",
    color: "bg-orange-500",
  },
  {
    icon: "🎓",
    title: "Scholarship deadline approaching",
    time: "Today",
    color: "bg-pink-500",
  },
];

export default function RecentActivity() {
  return (
    <section className="mb-12">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-3xl font-black">
          📈 Recent Activity
        </h2>

        <span className="text-gray-400">
          Live AI Updates
        </span>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

        {activities.map((activity, index) => (

          <div
            key={index}
            className={`flex items-center justify-between py-5 ${
              index !== activities.length - 1
                ? "border-b border-white/10"
                : ""
            }`}
          >

            <div className="flex items-center gap-5">

              <div
                className={`w-12 h-12 rounded-full ${activity.color} flex items-center justify-center text-xl`}
              >
                {activity.icon}
              </div>

              <div>

                <h3 className="font-semibold text-lg">
                  {activity.title}
                </h3>

                <p className="text-gray-400 text-sm">
                  {activity.time}
                </p>

              </div>

            </div>

            <span className="text-emerald-400 font-semibold">
              Completed
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}