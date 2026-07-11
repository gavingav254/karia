import { Link } from "react-router-dom";

export default function QuickActions() {
  return (
    <div className="mt-10 space-x-4">
      <Link to="/assignment">
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Assignment
        </button>
      </Link>

      <Link to="/chat">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Chat
        </button>
      </Link>

      <Link to="/match">
        <button className="bg-purple-500 text-white px-4 py-2 rounded">
          Match
        </button>
      </Link>
    </div>
  );
}