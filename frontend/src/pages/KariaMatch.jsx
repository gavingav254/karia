import { useState } from "react";

const initialProfile = {
  name: "Brian Kimathi",
  course: "BSc Computer Science",
  university: "University Student",
  skills: [
    "React",
    "JavaScript",
    "Node.js",
    "Python",
    "UI Design",
    "AI",
  ],
  projects: [
    "Assignment Intelligence",
    "Student Dashboard",
    "Portfolio Website",
    "AI Chat Assistant",
  ],
};

const initialMatches = [
  {
    id: 1,
    title: "Frontend Developer Internship",
    company: "TechHub Embu",
    type: "Internship",
    salary: "KES 25,000/month",
    score: 98,
    reason:
      "Gemma detected React, JavaScript and frontend development experience.",
  },
  {
    id: 2,
    title: "Website Development Gig",
    company: "Student Business Hub",
    type: "Freelance",
    salary: "KES 18,000",
    score: 95,
    reason:
      "Your portfolio strongly matches website development requirements.",
  },
  {
    id: 3,
    title: "Google Gemma Hackathon",
    company: "Google Developer Groups",
    type: "Hackathon",
    salary: "Prize Pool",
    score: 97,
    reason:
      "Your AI experience makes you an excellent candidate.",
  },
  {
    id: 4,
    title: "UI/UX Designer",
    company: "Campus Innovation Lab",
    type: "Part Time",
    salary: "KES 12,000",
    score: 90,
    reason:
      "Gemma matched your UI Design skills with this opportunity.",
  },
];

const services = [
  "Website Development",
  "Graphic Design",
  "Photography",
  "Video Editing",
  "Tutoring",
  "AI Automation",
];

export default function KariaMatch() {
  const [profile, setProfile] = useState(initialProfile);

  const [matches, setMatches] = useState(initialMatches);

  const [selected, setSelected] = useState(initialMatches[0]);

  const [saved, setSaved] = useState([]);

  const [showProfileModal, setShowProfileModal] = useState(false);

  const [showOpportunityModal, setShowOpportunityModal] = useState(false);

  const [profileForm, setProfileForm] = useState({
    name: "",
    course: "",
    skills: "",
    about: "",
  });

  const [opportunityForm, setOpportunityForm] = useState({
    title: "",
    company: "",
    skills: "",
    salary: "",
    description: "",
  });

  function saveProfile() {
    setProfile({
      ...profile,
      name: profileForm.name || profile.name,
      course: profileForm.course || profile.course,
      skills: profileForm.skills
        ? profileForm.skills.split(",").map((s) => s.trim())
        : profile.skills,
    });

    setShowProfileModal(false);

    alert("✅ Student profile updated!");
  }

  function postOpportunity() {
    const newOpportunity = {
      id: Date.now(),
      title: opportunityForm.title,
      company: opportunityForm.company,
      type: "Posted",
      salary: opportunityForm.salary,
      score: 100,
      reason: opportunityForm.description,
    };

    setMatches([newOpportunity, ...matches]);

    setSelected(newOpportunity);

    setShowOpportunityModal(false);

    alert("🚀 Opportunity posted successfully!");
  }

  function saveOpportunity() {
    setSaved([...saved, selected.title]);

    alert("⭐ Opportunity saved!");
  }

  function applyNow() {
    alert(
      "✅ Application Submitted!\n\nKARIA AI has notified the organization."
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white px-8 py-10">

      <div className="max-w-7xl mx-auto">
        {/* Header */}

<h1 className="text-5xl font-black">
  🤝 KARIA Match AI
</h1>

<p className="mt-4 text-lg text-gray-400 max-w-3xl">
  KARIA AI analyzes your skills, assignments, portfolio and experience
  to intelligently match you with internships, scholarships,
  hackathons, freelance work and student business opportunities.
</p>

{/* Stats */}

<div className="grid md:grid-cols-4 gap-6 mt-10">

  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-3xl p-6">
    <h3 className="text-gray-400">AI Matches</h3>
    <h1 className="text-5xl font-black mt-3">
      {matches.length}
    </h1>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
    <h3 className="text-gray-400">Average Match</h3>
    <h1 className="text-5xl font-black text-emerald-400 mt-3">
      95%
    </h1>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
    <h3 className="text-gray-400">Skills</h3>
    <h1 className="text-5xl font-black mt-3">
      {profile.skills.length}
    </h1>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
    <h3 className="text-gray-400">Saved</h3>
    <h1 className="text-5xl font-black mt-3">
      {saved.length}
    </h1>
  </div>

</div>

{/* Action Buttons */}

<div className="flex flex-wrap gap-5 mt-10">

  <button
    onClick={() => setShowProfileModal(true)}
    className="bg-emerald-500 hover:bg-emerald-600 px-7 py-4 rounded-xl font-bold transition"
  >
    👤 Create Student Profile
  </button>

  <button
    onClick={() => setShowOpportunityModal(true)}
    className="bg-blue-500 hover:bg-blue-600 px-7 py-4 rounded-xl font-bold transition"
  >
    💼 Post Opportunity
  </button>

</div>

{/* Main Grid */}

<div className="grid lg:grid-cols-3 gap-8 mt-10">

  {/* Profile */}

  <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

    <h2 className="text-2xl font-bold">
      👤 Student Profile
    </h2>

    <h3 className="text-3xl font-bold mt-6">
      {profile.name}
    </h3>

    <p className="text-gray-400 mt-2">
      {profile.course}
    </p>

    <div className="mt-8">

      <h3 className="font-bold text-xl">
        Skills
      </h3>

      <div className="flex flex-wrap gap-3 mt-4">

        {profile.skills.map((skill) => (

          <span
            key={skill}
            className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-full"
          >
            {skill}
          </span>

        ))}

      </div>

    </div>

    <div className="mt-8">

      <h3 className="font-bold text-xl">
        Projects
      </h3>

      <ul className="mt-4 space-y-3 text-gray-300">

        {profile.projects.map((project) => (

          <li key={project}>
            • {project}
          </li>

        ))}

      </ul>

    </div>

  </div>

  {/* Right Side */}

  <div className="lg:col-span-2">

    <h2 className="text-3xl font-bold mb-6">
      🔥 AI Recommended Matches
    </h2>
    <div className="space-y-6">

  {matches.map((match) => (

    <div
      key={match.id}
      onClick={() => setSelected(match)}
      className={`cursor-pointer rounded-3xl p-8 transition border ${
        selected.id === match.id
          ? "border-emerald-400 bg-emerald-500/10"
          : "border-white/10 bg-white/5 hover:border-emerald-400"
      }`}
    >

      <div className="flex justify-between items-start">

        <div>

          <h2 className="text-2xl font-bold">
            {match.title}
          </h2>

          <p className="text-gray-400 mt-2">
            {match.company}
          </p>

          <div className="flex gap-3 mt-4">

            <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">
              {match.type}
            </span>

            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-sm">
              {match.salary}
            </span>

          </div>

        </div>

        <div className="text-right">

          <h1 className="text-5xl font-black text-emerald-400">
            {match.score}%
          </h1>

          <p className="text-gray-400">
            Match
          </p>

        </div>

      </div>

    </div>

  ))}

</div>

{/* AI Explanation */}

<div className="mt-10 rounded-3xl bg-emerald-500/10 border border-emerald-500/30 p-8">

  <h2 className="text-3xl font-bold text-emerald-300">
    🤖 Why Gemma Recommended This
  </h2>

  <p className="mt-6 text-lg leading-8 text-gray-300">
    {selected.reason}
  </p>

  <div className="flex flex-wrap gap-4 mt-8">

    <button
      onClick={applyNow}
      className="bg-emerald-500 hover:bg-emerald-600 px-8 py-4 rounded-xl font-bold"
    >
      Apply Now
    </button>

    <button
      onClick={saveOpportunity}
      className="border border-white/20 hover:border-emerald-400 px-8 py-4 rounded-xl font-bold"
    >
      ⭐ Save Opportunity
    </button>

  </div>

</div>

</div>

</div>

{/* Student Services */}

<section className="mt-16">

  <h2 className="text-3xl font-bold mb-8">
    🎓 Students Offering Services
  </h2>

  <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-5">

    {services.map((service) => (

      <div
        key={service}
        className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center hover:border-emerald-400 transition"
      >

        <h3 className="font-semibold">
          {service}
        </h3>

      </div>

    ))}

  </div>

</section>
{/* AI Recommendation */}

<section className="mt-16 rounded-3xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 p-10">

  <h2 className="text-3xl font-bold">
    🧠 KARIA AI Recommendation
  </h2>

  <p className="mt-6 text-lg leading-8 text-gray-300">
    Based on your profile, detected skills and previous projects,
    KARIA recommends prioritizing AI, Frontend Development,
    Web Development and Hackathons.
  </p>

</section>

{/* CREATE PROFILE MODAL */}

{showProfileModal && (

<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

<div className="bg-[#111827] w-full max-w-xl rounded-3xl p-8 border border-white/10">

<h2 className="text-3xl font-bold mb-6">

👤 Create Student Profile

</h2>

<input
value={profileForm.name}
onChange={(e)=>setProfileForm({...profileForm,name:e.target.value})}
placeholder="Full Name"
className="w-full mb-4 p-4 rounded-xl bg-white/5 border border-white/10"
/>

<input
value={profileForm.course}
onChange={(e)=>setProfileForm({...profileForm,course:e.target.value})}
placeholder="Course"
className="w-full mb-4 p-4 rounded-xl bg-white/5 border border-white/10"
/>

<input
value={profileForm.skills}
onChange={(e)=>setProfileForm({...profileForm,skills:e.target.value})}
placeholder="Skills (comma separated)"
className="w-full mb-4 p-4 rounded-xl bg-white/5 border border-white/10"
/>

<textarea
value={profileForm.about}
onChange={(e)=>setProfileForm({...profileForm,about:e.target.value})}
placeholder="About Yourself"
className="w-full h-32 mb-6 p-4 rounded-xl bg-white/5 border border-white/10"
/>

<div className="flex gap-4">

<button
onClick={saveProfile}
className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-xl font-bold"
>

Save Profile

</button>

<button
onClick={()=>setShowProfileModal(false)}
className="border border-white/20 px-6 py-3 rounded-xl"
>

Cancel

</button>

</div>

</div>

</div>

)}

{/* POST OPPORTUNITY */}

{showOpportunityModal && (

<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

<div className="bg-[#111827] w-full max-w-xl rounded-3xl p-8 border border-white/10">

<h2 className="text-3xl font-bold mb-6">

💼 Post Opportunity

</h2>

<input
value={opportunityForm.title}
onChange={(e)=>setOpportunityForm({...opportunityForm,title:e.target.value})}
placeholder="Opportunity Title"
className="w-full mb-4 p-4 rounded-xl bg-white/5 border border-white/10"
/>

<input
value={opportunityForm.company}
onChange={(e)=>setOpportunityForm({...opportunityForm,company:e.target.value})}
placeholder="Company"
className="w-full mb-4 p-4 rounded-xl bg-white/5 border border-white/10"
/>

<input
value={opportunityForm.salary}
onChange={(e)=>setOpportunityForm({...opportunityForm,salary:e.target.value})}
placeholder="Salary / Reward"
className="w-full mb-4 p-4 rounded-xl bg-white/5 border border-white/10"
/>

<textarea
value={opportunityForm.description}
onChange={(e)=>setOpportunityForm({...opportunityForm,description:e.target.value})}
placeholder="Describe the opportunity..."
className="w-full h-32 mb-6 p-4 rounded-xl bg-white/5 border border-white/10"
/>

<div className="flex gap-4">

<button
onClick={postOpportunity}
className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-bold"
>

Post Opportunity

</button>

<button
onClick={()=>setShowOpportunityModal(false)}
className="border border-white/20 px-6 py-3 rounded-xl"
>

Cancel

</button>

</div>

</div>

</div>

)}

</div>

</main>

);

}