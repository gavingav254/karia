export default function AnalyzeButton({
  loading,
  onAnalyze,
}) {
  return (
    <div className="flex justify-center mt-10">

      <button
        onClick={onAnalyze}
        disabled={loading}
        className="px-10 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-700 transition text-lg font-semibold"
      >

        {loading
          ? "🤖 Analyzing..."
          : "✨ Analyze Assignment"}

      </button>

    </div>
  );
}