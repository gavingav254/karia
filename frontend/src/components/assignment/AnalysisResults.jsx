export default function AnalysisResults({ result }) {
  if (!result) return null;

  let data;

  try {
    data =
      typeof result.response === "string"
        ? JSON.parse(result.response)
        : result.response;
  } catch {
    return (
      <section className="mt-10 rounded-3xl border border-red-500/30 bg-red-500/10 p-8">
        <h2 className="text-2xl font-bold">
          ❌ AI Response Error
        </h2>

        <p className="mt-4 text-gray-300 whitespace-pre-wrap">
          {result.response}
        </p>
      </section>
    );
  }

  return (
    <section className="mt-14 space-y-8">

      {/* Header */}

      <div className="rounded-3xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 p-8">

        <h1 className="text-4xl font-black">
          🤖 KARIA AI Analysis
        </h1>

        <p className="mt-3 text-gray-300">
          Generated completely offline using Gemma 4 LiteRT
        </p>

      </div>

      {/* Summary */}

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

        <h2 className="text-2xl font-bold mb-5">
          📄 Assignment Summary
        </h2>

        <p className="text-gray-300 leading-8">
          {data.summary}
        </p>

      </div>

      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white/5 rounded-3xl border border-white/10 p-6">

          <h3 className="text-gray-400">
            Difficulty
          </h3>

          <p className="text-3xl font-black mt-2">
            {data.difficulty}
          </p>

        </div>

        <div className="bg-white/5 rounded-3xl border border-white/10 p-6">

          <h3 className="text-gray-400">
            Estimated Hours
          </h3>

          <p className="text-3xl font-black mt-2">
            {data.estimated_hours}
          </p>

        </div>

        <div className="bg-white/5 rounded-3xl border border-white/10 p-6">

          <h3 className="text-gray-400">
            Deadline
          </h3>

          <p className="text-3xl font-black mt-2 text-emerald-400">
            {data.deadline}
          </p>

          <p className="mt-2 text-gray-400">
            {data.remaining_days}
          </p>

        </div>

      </div>

      {/* Deliverables */}

      <div className="bg-white/5 rounded-3xl border border-white/10 p-8">

        <h2 className="text-2xl font-bold mb-6">
          📦 Deliverables
        </h2>

        <div className="grid md:grid-cols-2 gap-4">

          {data.deliverables?.map((item, index) => (

            <div
              key={index}
              className="rounded-xl bg-white/5 p-4"
            >
              ✅ {item}
            </div>

          ))}

        </div>

      </div>

      {/* Study Plan */}

      <div className="bg-white/5 rounded-3xl border border-white/10 p-8">

        <h2 className="text-2xl font-bold mb-6">
          📚 AI Study Plan
        </h2>

        <div className="space-y-5">

          {data.study_plan?.map((step, index) => (

            <div key={index}>

              <h3 className="font-bold text-emerald-400">
                {step.day}
              </h3>

              <p className="text-gray-300">
                {step.task}
              </p>

            </div>

          ))}

        </div>

      </div>

      {/* Risks */}

      <div className="bg-white/5 rounded-3xl border border-white/10 p-8">

        <h2 className="text-2xl font-bold mb-6">
          ⚠️ Risks
        </h2>

        <div className="space-y-3">

          {data.risks?.map((risk, index) => (

            <p key={index}>
              • {risk}
            </p>

          ))}

        </div>

      </div>

      {/* Lecturer Questions */}

      <div className="bg-white/5 rounded-3xl border border-white/10 p-8">

        <h2 className="text-2xl font-bold mb-6">
          ❓ Questions for Lecturer
        </h2>

        <div className="space-y-3">

          {data.questions_for_lecturer?.map((question, index) => (

            <p key={index}>
              • {question}
            </p>

          ))}

        </div>

      </div>

      {/* Checklist */}

      <div className="bg-white/5 rounded-3xl border border-white/10 p-8">

        <h2 className="text-2xl font-bold mb-6">
          ✅ Submission Checklist
        </h2>

        <div className="space-y-3">

          {data.submission_checklist?.map((item, index) => (

            <p key={index}>
              ☐ {item}
            </p>

          ))}

        </div>

      </div>

      {/* Recommendation */}

      <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-8">

        <h2 className="text-2xl font-bold">
          💡 AI Recommendation
        </h2>

        <p className="mt-5 text-gray-300 leading-8">
          {data.recommendation}
        </p>

      </div>

    </section>
  );
}