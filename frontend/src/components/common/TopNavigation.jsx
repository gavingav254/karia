import { Link, useNavigate } from "react-router-dom";

export default function TopNavigation({ title }) {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between mb-10 border-b border-white/10 pb-5">

      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
      >
        ← Back
      </button>

      <div className="text-center">
        <Link
          to="/"
          className="text-3xl font-black tracking-wider text-emerald-400"
        >
          KARIA
        </Link>

        <p className="text-gray-400 text-sm mt-1">
          {title}
        </p>
      </div>

      <Link
        to="/"
        className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition"
      >
        🏠 Home
      </Link>

    </header>
  );
}