import { useState } from "react";

export default function OfferService() {
  const [form, setForm] = useState({
    name: "",
    skill: "",
    description: "",
    contact: "",
    price: "",
    portfolio: "",
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
      "🎉 Your service has been published! Gemma will now recommend it to matching students and businesses."
    );
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white py-12 px-6">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-black">
          💼 Offer Your Service
        </h1>

        <p className="text-gray-400 mt-4">
          Showcase your skills and let Gemma recommend you to students,
          businesses and organizations.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6"
        >

          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full bg-white/10 rounded-xl p-4 outline-none"
          />

          <input
            name="skill"
            placeholder="Primary Skill (React Developer, Designer...)"
            onChange={handleChange}
            className="w-full bg-white/10 rounded-xl p-4 outline-none"
          />

          <textarea
            name="description"
            placeholder="Describe your service..."
            rows={5}
            onChange={handleChange}
            className="w-full bg-white/10 rounded-xl p-4 outline-none"
          />

          <input
            name="price"
            placeholder="Price (Optional)"
            onChange={handleChange}
            className="w-full bg-white/10 rounded-xl p-4 outline-none"
          />

          <input
            name="contact"
            placeholder="Phone / Email"
            onChange={handleChange}
            className="w-full bg-white/10 rounded-xl p-4 outline-none"
          />

          <input
            name="portfolio"
            placeholder="GitHub / Portfolio"
            onChange={handleChange}
            className="w-full bg-white/10 rounded-xl p-4 outline-none"
          />

          <div className="bg-emerald-500/10 border border-emerald-400 rounded-xl p-5">

            <h2 className="font-bold text-emerald-300">
              🤖 Gemma AI
            </h2>

            <p className="mt-2 text-gray-300">
              Once submitted, Gemma automatically analyzes your profile,
              identifies your strongest skills and recommends your service
              to the most relevant students, businesses and organizations.
            </p>

          </div>

          <button
            type="submit"
            className="w-full bg-emerald-500 hover:bg-emerald-400 py-4 rounded-xl text-xl font-bold transition"
          >
            Publish My Service
          </button>

        </form>

      </div>

    </main>
  );
}