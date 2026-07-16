import { dashboardStats } from "../data/appData";
import { useState } from "react";

const initialOpportunities = [
  
  {
    id: 1,
    type: "Student Service",
    title: "React Website Developer",
    organization: "Brian Kimathi",
    category: "Services",
    score: 98,
    description:
      "Building modern websites for students, businesses and organizations.",
  },
  {
    id: 2,
    type: "Graphic Design",
    title: "Logo & Poster Design",
    organization: "Faith Wanjiku",
    category: "Services",
    score: 95,
    description:
      "Professional branding, CVs, posters and social media graphics.",
  },
  {
    id: 3,
    type: "Internship",
    title: "Frontend Developer Intern",
    organization: "TechHub Embu",
    category: "Jobs",
    score: 93,
    description:
      "Looking for students with React and JavaScript experience.",
  },
  {
    id: 4,
    type: "Scholarship",
    title: "Women in Tech Scholarship",
    organization: "Tech Foundation Africa",
    category: "Scholarships",
    score: 89,
    description:
      "Financial support for technology students.",
  },
  {
    id: 5,
    type: "Hackathon",
    title: "Gemma AI Challenge",
    organization: "Google Developer Groups",
    category: "Hackathons",
    score: 97,
    description:
      "Build AI-powered solutions using Gemma.",
  },
];

const aiReasons = {
  "React Website Developer":
    "Gemma matched this because your profile shows React, JavaScript and web development skills.",

  "Logo & Poster Design":
    "Gemma detected creative design skills from your previous projects.",

  "Frontend Developer Intern":
    "Recommended because you've completed frontend assignments and demonstrated strong React experience.",

  "Women in Tech Scholarship":
    "Recommended from your academic profile and participation in technology projects.",

  "Gemma AI Challenge":
    "Recommended because you have previous experience building AI-powered applications.",
};

export default function Opportunities() {

  const [newOpportunity, setNewOpportunity] = useState({
  title: "",
  organization: "",
  description: "",
});

  const [filter, setFilter] = useState("All");

  const [search, setSearch] = useState("");

  const [opportunities, setOpportunities] =
    useState(initialOpportunities);

  const [selectedOpportunity, setSelectedOpportunity] =
    useState(null);

  const [saved, setSaved] = useState([]);

  const [showServiceModal, setShowServiceModal] =
    useState(false);

  const [showOpportunityModal, setShowOpportunityModal] =
    useState(false);

  const filtered = opportunities.filter((item) => {

    const category =
      filter === "All" || item.category === filter;

    const text =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.organization
        .toLowerCase()
        .includes(search.toLowerCase());

    return category && text;

  });

  return (

    <main className="min-h-screen bg-[#050816] text-white px-8 py-10">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-black">
          🚀 KARIA Opportunities
        </h1>

        <p className="text-gray-400 mt-4 text-lg">
          Discover internships, businesses,
          student services, scholarships,
          hackathons and freelance gigs
          intelligently recommended by Gemma AI.
        </p>

        <input
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          placeholder="Search opportunities..."
          className="mt-8 w-full rounded-xl bg-white/5 border border-white/10 px-5 py-4 outline-none"
        />

        <div className="flex flex-wrap gap-3 mt-8">

          {[
            "All",
            "Services",
            "Jobs",
            "Scholarships",
            "Hackathons",
          ].map((item)=>(

            <button
              key={item}
              onClick={()=>setFilter(item)}
              className={`px-5 py-2 rounded-full transition ${
                filter===item
                ? "bg-emerald-500"
                : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {item}
            </button>

          ))}

        </div>
                <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="bg-gradient-to-r from-emerald-600 to-emerald-500 rounded-3xl p-8">

            <h2 className="text-2xl font-bold">
              💼 Offer Your Skills
            </h2>

            <p className="mt-4 text-emerald-100 leading-7">
              Publish your services as a developer, designer,
              tutor, photographer, editor or freelancer.
              Gemma will recommend you to potential clients.
            </p>

            <button
              onClick={() => setShowServiceModal(true)}
              className="mt-6 bg-white text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
            >
              Offer My Service
            </button>

          </div>

          <div className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-8">

            <h2 className="text-2xl font-bold">
              🚀 Post an Opportunity
            </h2>

            <p className="mt-4 text-blue-100 leading-7">
              Companies and organizations can publish
              internships, jobs, scholarships and hackathons.
            </p>

            <button
              onClick={() => setShowOpportunityModal(true)}
              className="mt-6 bg-white text-black px-6 py-3 rounded-xl font-bold hover:scale-105 transition"
            >
              Create Opportunity
            </button>

          </div>

        </div>

        <div className="grid lg:grid-cols-2 gap-8 mt-12">

          {filtered.map((item)=>(

            <div
              key={item.id}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-emerald-400 transition"
            >

              <div className="flex justify-between">

                <span className="text-emerald-400 font-semibold">
                  {item.type}
                </span>

                <span className="bg-emerald-500 px-4 py-1 rounded-full text-sm font-bold">
                  Match {item.score}%
                </span>

              </div>

              <h2 className="text-2xl font-bold mt-5">
                {item.title}
              </h2>

              <p className="text-gray-400 mt-2">
                {item.organization}
              </p>

              <p className="mt-5 text-gray-300 leading-7">
                {item.description}
              </p>

              <div className="mt-6 bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">

                <h3 className="font-bold text-emerald-400">
                  🤖 Why Gemma Recommended This
                </h3>

                <p className="text-gray-300 mt-2">
                  {aiReasons[item.title]}
                </p>

              </div>

              <div className="flex gap-4 mt-8">

                <button
                  onClick={() => setSelectedOpportunity(item)}
                  className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-xl font-bold"
                >
                  View Details
                </button>

                <button
                  onClick={() => {
                    if (!saved.includes(item.id)) {
                      setSaved([...saved, item.id]);
                    }
                  }}
                  className={`px-6 py-3 rounded-xl font-bold transition ${
                    saved.includes(item.id)
                      ? "bg-yellow-500 text-black"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  {saved.includes(item.id)
                    ? "⭐ Saved"
                    : "Save"}
                </button>

              </div>

            </div>

          ))}

        </div>
                {selectedOpportunity && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-[#111827] w-full max-w-2xl rounded-3xl p-8 border border-white/10">

              <h2 className="text-3xl font-bold">
                {selectedOpportunity.title}
              </h2>

              <p className="text-emerald-400 mt-2">
                {selectedOpportunity.organization}
              </p>

              <p className="mt-6 text-gray-300 leading-8">
                {selectedOpportunity.description}
              </p>

              <div className="mt-6 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-5">

                <h3 className="font-bold text-emerald-300">
                  🤖 AI Recommendation
                </h3>

                <p className="mt-3 text-gray-300">
                  {aiReasons[selectedOpportunity.title]}
                </p>

              </div>

              <div className="flex gap-4 mt-8">

                <button
                  onClick={() => alert("✅ Application Submitted Successfully!")}
                  className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-xl font-bold"
                >
                  Apply Now
                </button>

                <button
                  onClick={() => setSelectedOpportunity(null)}
                  className="border border-white/20 px-6 py-3 rounded-xl"
                >
                  Close
                </button>

              </div>

            </div>
          </div>
        )}

        {showServiceModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-[#111827] w-full max-w-xl rounded-3xl p-8 border border-white/10">

              <h2 className="text-3xl font-bold mb-6">
                💼 Offer Your Service
              </h2>

              <input
                placeholder="Service Name"
                className="w-full mb-4 p-4 rounded-xl bg-white/5 border border-white/10"
              />

              <input
                placeholder="Skills"
                className="w-full mb-4 p-4 rounded-xl bg-white/5 border border-white/10"
              />

              <textarea
                placeholder="Describe your service..."
                className="w-full h-32 mb-6 p-4 rounded-xl bg-white/5 border border-white/10"
              />

              <div className="flex gap-4">

                <button
                  onClick={()=>{
                    alert("✅ Service Published Successfully!");
                    setShowServiceModal(false);
                  }}
                  className="bg-emerald-500 px-6 py-3 rounded-xl font-bold"
                >
                  Publish
                </button>

                <button
                  onClick={()=>setShowServiceModal(false)}
                  className="border border-white/20 px-6 py-3 rounded-xl"
                >
                  Cancel
                </button>

              </div>

            </div>
          </div>
        )}

        {showOpportunityModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
            <div className="bg-[#111827] w-full max-w-xl rounded-3xl p-8 border border-white/10">

              <h2 className="text-3xl font-bold mb-6">
                🚀 Create Opportunity
              </h2>

              <input
  placeholder="Opportunity Title"
  value={newOpportunity.title}
  onChange={(e) =>
    setNewOpportunity({
      ...newOpportunity,
      title: e.target.value,
    })
  }
  className="w-full mb-4 p-4 rounded-xl bg-white/5 border border-white/10"
/>

              <input
  placeholder="Organization"
  value={newOpportunity.organization}
  onChange={(e) =>
    setNewOpportunity({
      ...newOpportunity,
      organization: e.target.value,
    })
  }
  className="w-full mb-4 p-4 rounded-xl bg-white/5 border border-white/10"
/>

              <textarea
  placeholder="Description"
  value={newOpportunity.description}
  onChange={(e) =>
    setNewOpportunity({
      ...newOpportunity,
      description: e.target.value,
    })
  }
  className="w-full h-32 mb-6 p-4 rounded-xl bg-white/5 border border-white/10"
/>

              <div className="flex gap-4">

<div className="flex gap-4">

  <button
    onClick={() => {

      dashboardStats.opportunities += 1;

      setOpportunities([
  ...opportunities,
  {
    id: Date.now(),
    type: "Opportunity",
    title: newOpportunity.title,
    organization: newOpportunity.organization,
    category: "Jobs",
    score: 90,
    description: newOpportunity.description,
  },
]);

setNewOpportunity({
  title: "",
  organization: "",
  description: "",
});

      alert("🚀 Opportunity Posted Successfully!");

      setShowOpportunityModal(false);

    }}
    className="bg-blue-500 px-6 py-3 rounded-xl font-bold"
  >
    Create Opportunity
  </button>

  <button
    onClick={() => setShowOpportunityModal(false)}
    className="border border-white/20 px-6 py-3 rounded-xl"
  >
    Cancel
  </button>

</div>
                <button
                  onClick={()=>setShowOpportunityModal(false)}
                  className="border border-white/20 px-6 py-3 rounded-xl"
                ></button>

              </div>

            </div>
          </div>
        )}

      </div>

    </main>

  );

}