const suggestions = [
  {
    title: "Software Engineering Assignment",
    message: "Due in 3 days. Start today to avoid last-minute pressure.",
  },
  {
    title: "Group Project Update",
    message: "Your team assigned Brian to the presentation and Alice to documentation.",
  },
  {
    title: "Opportunity Found",
    message: "A student is looking for a React developer. Your skills are a strong match.",
  },
];

export default function AISuggestions() {
  return (
    <section className="mt-12">

      <h2 className="text-3xl font-bold mb-6">
        AI Recommendations
      </h2>

      <div className="space-y-5">

        {suggestions.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl bg-white/5 border border-white/10 p-6 hover:border-emerald-400 transition"
          >
            <h3 className="text-xl font-semibold text-emerald-400">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-3">
              {item.message}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}