export default function AnalysisResults({ result }) {
  if (!result) return null;

  let data = result;

  try {
    // Handle different backend response shapes

    if (typeof result === "string") {
      data = JSON.parse(result);
    }

    if (data.response) {
      data = data.response;

      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch {
          data = {
            raw_response: data,
          };
        }
      }
    }

    console.log("========== FINAL ANALYSIS ==========");
    console.log(data);

  } catch (err) {

    console.error(err);

    return (
      <section className="mt-12 rounded-3xl border border-red-500/30 bg-red-500/10 p-8">

        <h2 className="text-3xl font-black">
          ❌ Invalid AI Response
        </h2>

        <pre className="mt-6 whitespace-pre-wrap text-sm">
          {JSON.stringify(result, null, 2)}
        </pre>

      </section>
    );
  }

  const summary =
    data.summary ||
    data.raw_response ||
    "No summary generated.";

  const difficulty =
    data.difficulty ||
    "Unknown";

  const estimatedHours =
    data.estimated_hours ||
    "Unknown";

  const deadline =
    data.deadline ||
    "Not detected";

  const remainingDays =
    data.remaining_days ||
    "";

  const deliverables =
    Array.isArray(data.deliverables)
      ? data.deliverables
      : [];

  const studyPlan =
    Array.isArray(data.study_plan)
      ? data.study_plan
      : [];

  const risks =
    Array.isArray(data.risks)
      ? data.risks
      : [];

  const questions =
    Array.isArray(data.questions_for_lecturer)
      ? data.questions_for_lecturer
      : [];

  const checklist =
    Array.isArray(data.submission_checklist)
      ? data.submission_checklist
      : [];

  const recommendation =
    data.recommendation ||
    "No recommendation available.";

  return (
    <section className="mt-14 space-y-8">

      {/* HERO */}

      <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 p-10">

        <h1 className="text-4xl font-black">
          🤖 KARIA Assignment Intelligence
        </h1>

        <p className="mt-4 text-gray-300 leading-8">
          AI-powered breakdown of your assignment with planning,
          deliverables, risks and recommendations.
        </p>

      </div>

      {/* SUMMARY */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <h2 className="text-2xl font-bold mb-6">
          📝 Assignment Summary
        </h2>

        <p className="leading-8 text-gray-300">
          {summary}
        </p>

      </div>

      {/* OVERVIEW */}

      <div className="grid lg:grid-cols-3 gap-6">

        <div className="rounded-3xl bg-white/5 border border-white/10 p-7">

          <p className="text-gray-400">
            Difficulty
          </p>

          <h2 className="mt-3 text-4xl font-black">
            {difficulty}
          </h2>

        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-7">

          <p className="text-gray-400">
            Estimated Hours
          </p>

          <h2 className="mt-3 text-4xl font-black">
            {estimatedHours}
          </h2>

        </div>

        <div className="rounded-3xl bg-white/5 border border-white/10 p-7">

          <p className="text-gray-400">
            Deadline
          </p>

          <h2 className="mt-3 text-3xl font-black text-emerald-400">
            {deadline}
          </h2>

          <p className="mt-3 text-gray-500">
            {remainingDays}
          </p>

        </div>

      </div>

      {/* Deliverables */}
            {/* MAIN GRID */}

      <div className="grid lg:grid-cols-2 gap-8">

        {/* Deliverables */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="text-2xl font-bold mb-6">
            📦 Deliverables
          </h2>

          {deliverables.length > 0 ? (

            <div className="space-y-4">

              {deliverables.map((item, index) => (

                <div
                  key={index}
                  className="rounded-xl bg-white/5 p-4 border border-white/5"
                >
                  ✅ {item}
                </div>

              ))}

            </div>

          ) : (

            <p className="text-gray-500">
              No deliverables detected.
            </p>

          )}

        </div>

        {/* Study Plan */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="text-2xl font-bold mb-6">
            📚 AI Study Plan
          </h2>

          {studyPlan.length > 0 ? (

            <div className="space-y-5">

              {studyPlan.map((step, index) => (

                <div
                  key={index}
                  className="border-l-4 border-emerald-400 pl-5"
                >

                  <h3 className="font-bold text-emerald-400">

                    {step.day || `Step ${index + 1}`}

                  </h3>

                  <p className="mt-2 text-gray-300">

                    {step.task || step}

                  </p>

                </div>

              ))}

            </div>

          ) : (

            <p className="text-gray-500">
              No study plan generated.
            </p>

          )}

        </div>

        {/* Risks */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="text-2xl font-bold mb-6">
            ⚠ Risks
          </h2>

          {risks.length > 0 ? (

            <div className="space-y-4">

              {risks.map((risk, index) => (

                <div
                  key={index}
                  className="rounded-xl bg-red-500/10 border border-red-500/20 p-4"
                >
                  • {risk}
                </div>

              ))}

            </div>

          ) : (

            <p className="text-gray-500">
              No risks detected.
            </p>

          )}

        </div>

        {/* Questions */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="text-2xl font-bold mb-6">
            ❓ Questions for Lecturer
          </h2>

          {questions.length > 0 ? (

            <div className="space-y-4">

              {questions.map((question, index) => (

                <div
                  key={index}
                  className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 p-4"
                >
                  • {question}
                </div>

              ))}

            </div>

          ) : (

            <p className="text-gray-500">
              No questions suggested.
            </p>

          )}

        </div>

      </div>

      {/* CHECKLIST */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <h2 className="text-2xl font-bold mb-6">
          ✅ Submission Checklist
        </h2>

        {checklist.length > 0 ? (

          <div className="grid md:grid-cols-2 gap-4">

            {checklist.map((item, index) => (

              <div
                key={index}
                className="rounded-xl bg-white/5 border border-white/5 p-4"
              >
                ☐ {item}
              </div>

            ))}

          </div>

        ) : (

          <p className="text-gray-500">
            No checklist generated.
          </p>

        )}

      </div>

      {/* RECOMMENDATION */}

      <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 p-8">

        <h2 className="text-3xl font-black">
          💡 AI Recommendation
        </h2>

        <p className="mt-6 leading-8 text-gray-300">

          {recommendation}

        </p>

      </div>

    </section>
  );
}