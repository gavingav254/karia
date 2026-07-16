import { useState } from "react";

export default function PostOpportunity() {
  const [form, setForm] = useState({
    organization: "",
    title: "",
    category: "",
    description: "",
    requirements: "",
    deadline: "",
    contact: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert(
      "🚀 Opportunity Published! Gemma will automatically match qualified students based on their skills, projects and academic profile."
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white py-12 px-6">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-black">
          🚀 Post an Opportunity
        </h1>

        <p className="text-gray-400 mt-4">
          Publish internships, scholarships, hackathons, campus jobs,
          freelance gigs or business opportunities for students.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6"
        >

          <input
            name="organization"
            placeholder="Organization / Company"
            onChange={handleChange}
            className="w-full bg-white/10 rounded-xl p-4 outline-none"
          />

          <input
            name="title"
            placeholder="Opportunity Title"
            onChange={handleChange}
            className="w-full bg-white/10 rounded-xl p-4 outline-none"
          />

          <select
            name="category"
            onChange={handleChange}
            className="w-full bg-white/10 rounded-xl p-4 outline-none"
          >
            <option value="">Select Category</option>
            <option>Internship</option>
            <option>Student Service</option>
            <option>Hackathon</option>
            <option>Scholarship</option>
            <option>Campus Job</option>
            <option>Freelance Gig</option>
            <option>Business Opportunity</option>
          </select>

          <textarea
            name="description"
            rows={5}
            placeholder="Describe the opportunity..."
            onChange={handleChange}
            className="w-full bg-white/10 rounded-xl p-4 outline-none"
          />

          <textarea
            name="requirements"
            rows={4}
            placeholder="Required skills..."
            onChange={handleChange}
            className="w-full bg-white/10 rounded-xl p-4 outline-none"
          />

          <input
            type="date"
            name="deadline"
            onChange={handleChange}
            className="w-full bg-white/10 rounded-xl p-4 outline-none"
          />

          <input
            name="contact"
            placeholder="Contact Email / Phone"
            onChange={handleChange}
            className="w-full bg-white/10 rounded-xl p-4 outline-none"
          />

          <div className="bg-blue-500/10 border border-blue-400 rounded-xl p-5">

            <h2 className="font-bold text-blue-300">
              🤖 Gemma AI Matching
            </h2>

            <p className="mt-2 text-gray-300">
              After publishing, Gemma analyzes the required skills,
              compares them against student profiles, assignments,
              completed projects and portfolios, then recommends the
              opportunity to the most qualified candidates.
            </p>

          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-400 py-4 rounded-xl text-xl font-bold transition"
          >
            Publish Opportunity
          </button>

        </form>

      </div>
    </main>
  );
}