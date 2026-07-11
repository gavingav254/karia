const activities = [
  {
    title: "Assignment analyzed",
    description: "Software Engineering CAT uploaded and summarized.",
    time: "10 min ago",
  },
  {
    title: "Group chat processed",
    description: "Extracted 6 tasks and 2 deadlines.",
    time: "35 min ago",
  },
  {
    title: "New opportunity",
    description: "React Developer request matched your profile.",
    time: "1 hr ago",
  },
];

export default function RecentActivity() {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold mb-6">
        Recent Activity
      </h2>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.title}
            className="rounded-2xl bg-white/5 border border-white/10 p-5 hover:border-emerald-400 transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg">
                  {activity.title}
                </h3>

                <p className="text-gray-400 mt-2">
                  {activity.description}
                </p>
              </div>

              <span className="text-sm text-emerald-400">
                {activity.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}