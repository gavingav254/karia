const features = [
  {
    title: "📊 Smart Dashboard",
    description:
      "Assignments, AI recommendations, opportunities and career insights in one workspace.",
  },
  {
    title: "📄 Assignment Intelligence",
    description:
      "Upload assignments and let Gemma explain questions, generate study plans and estimate completion time.",
  },
  {
    title: "💼 Opportunity Marketplace",
    description:
      "Students and businesses can post jobs, gigs, internships and collaborations while AI recommends the best matches.",
  },
  {
    title: "🤝 KARIA Match",
    description:
      "Gemma matches students to opportunities based on skills, portfolio, interests and experience instead of traditional CVs.",
  },
];

export default function Features() {
  return (
    <section className="py-24">
      <h2 className="text-6xl font-black text-center mb-16">
        Everything Students Need.
        <br />
        One Platform.
      </h2>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-emerald-400 transition"
          >
            <h3 className="text-3xl font-bold mb-6">
              {feature.title}
            </h3>

            <p className="text-gray-400 leading-8">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}