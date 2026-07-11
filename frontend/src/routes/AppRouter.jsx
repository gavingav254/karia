import { Routes, Route } from "react-router-dom";

import Landing from "../pages/Landing";
import Dashboard from "../pages/Dashboard";
import AssignmentAnalyzer from "../pages/AssignmentAnalyzer";
import ChatAnalyzer from "../pages/ChatAnalyzer";
import KariaMatch from "../pages/KariaMatch";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/assignment" element={<AssignmentAnalyzer />} />
      <Route path="/chat" element={<ChatAnalyzer />} />
      <Route path="/match" element={<KariaMatch />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}