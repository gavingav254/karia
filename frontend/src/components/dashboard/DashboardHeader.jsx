export default function DashboardHeader() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <section className="mb-12">

      <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-600 via-emerald-500 to-cyan-500 p-10 shadow-2xl">

        <p className="text-emerald-100 text-lg font-semibold">
          {greeting} 👋
        </p>

        <h1 className="text-5xl font-black mt-2">
          Welcome back to KARIA
        </h1>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-50">
          Your AI Student Operating System is ready.
          KARIA has analyzed your academic progress,
          detected new opportunities and prepared personalized
          recommendations to help you succeed.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">

            <p className="text-sm text-emerald-100">
              📄 Pending Assignments
            </p>

            <h2 className="text-4xl font-black mt-2">
              4
            </h2>

            <p className="text-sm text-emerald-100 mt-2">
              Ready for AI analysis
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">

            <p className="text-sm text-emerald-100">
              🤝 AI Match Score
            </p>

            <h2 className="text-4xl font-black mt-2">
              98%
            </h2>

            <p className="text-sm text-emerald-100 mt-2">
              Excellent profile strength
            </p>

          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">

            <p className="text-sm text-emerald-100">
              💼 New Opportunities
            </p>

            <h2 className="text-4xl font-black mt-2">
              21
            </h2>

            <p className="text-sm text-emerald-100 mt-2">
              AI recommendations waiting
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}