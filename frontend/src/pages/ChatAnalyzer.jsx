import { useState, useRef, useEffect } from "react";

const quickPrompts = [
  "Summarize my assignment",
  "Explain React Hooks",
  "Prepare me for exams",
  "Help me write a CV",
  "Find internship opportunities",
];

export default function ChatAnalyzer() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Welcome to K.A.R.I.A AI.\n\nI'm your intelligent university assistant powered by Gemma 4.\n\nI can help with assignments, coding, research, exams, career advice, university life and much more.\n\nHow can I help you today?",
    },
  ]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function askAI() {
    if (!prompt.trim() || loading) return;

    const currentPrompt = prompt;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: currentPrompt,
      },
    ]);

    setPrompt("");
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: currentPrompt,
        }),
      });

      if (!res.ok) {
        throw new Error("Backend request failed");
      }

      const data = await res.json();

      let reply = "";

      if (typeof data.response === "string") {
        reply = data.response;
      } else if (data.response?.raw_response) {
        reply = data.response.raw_response;
      } else {
        reply = JSON.stringify(data.response, null, 2);
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: reply,
        },
      ]);
    } catch (err) {
      console.error(err);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "⚠ Unable to reach the KARIA AI server.\n\nMake sure the Python backend is running on port 8000.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <div className="max-w-6xl mx-auto px-6 py-10">

        <h1 className="text-5xl font-black">
          🧠 K.A.R.I.A AI Assistant
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          Ask questions. Learn faster. Build your future.
        </p>

        <div className="grid md:grid-cols-4 gap-5 mt-10">

          <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
            <p className="text-gray-400">
              Questions Today
            </p>

            <h2 className="text-4xl font-black mt-2">
              12
            </h2>
          </div>

          <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
            <p className="text-gray-400">
              Assignment Analyses
            </p>

            <h2 className="text-4xl font-black mt-2">
              5
            </h2>
          </div>

          <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
            <p className="text-gray-400">
              Research Sessions
            </p>

            <h2 className="text-4xl font-black mt-2">
              8
            </h2>
          </div>

          <div className="bg-white/5 rounded-2xl border border-white/10 p-6">
            <p className="text-gray-400">
              AI Accuracy
            </p>

            <h2 className="text-4xl font-black text-emerald-400 mt-2">
              96%
            </h2>
          </div>

        </div>

        <div className="flex flex-wrap gap-3 mt-8">

          {quickPrompts.map((item) => (

            <button
              key={item}
              onClick={() => setPrompt(item)}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-emerald-400 hover:bg-emerald-500/10 transition"
            >
              {item}
            </button>

          ))}

        </div>

        {/* Chat Window */}
        {/* Chat Window */}

        <div className="mt-8 bg-white/5 border border-white/10 rounded-3xl h-[520px] overflow-y-auto p-6">

          <div className="space-y-6">

            {messages.map((message, index) => (

              <div
                key={index}
                className={`flex items-end gap-3 ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                {message.role === "assistant" && (
                  <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold flex-shrink-0">
                    AI
                  </div>
                )}

                <div
                  className={`max-w-[80%] rounded-3xl px-6 py-5 whitespace-pre-wrap leading-8 ${
                    message.role === "user"
                      ? "bg-emerald-500 text-white"
                      : "bg-white/10 border border-white/10"
                  }`}
                >
                  {message.content}
                </div>

                {message.role === "user" && (
                  <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold flex-shrink-0">
                    You
                  </div>
                )}

              </div>

            ))}

            {loading && (

              <div className="flex items-end gap-3">

                <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center font-bold">
                  AI
                </div>

                <div className="bg-white/10 border border-white/10 rounded-3xl px-6 py-5">

                  <p className="text-emerald-400 font-semibold">
                    🧠 KARIA is thinking...
                  </p>

                  <div className="flex gap-2 mt-4">

                    <span className="animate-bounce">●</span>

                    <span
                      className="animate-bounce"
                      style={{ animationDelay: ".2s" }}
                    >
                      ●
                    </span>

                    <span
                      className="animate-bounce"
                      style={{ animationDelay: ".4s" }}
                    >
                      ●
                    </span>

                  </div>

                </div>

              </div>

            )}

            <div ref={bottomRef} />

          </div>

        </div>

        {/* Input */}

        <div className="mt-8 flex gap-4">

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                askAI();
              }
            }}
            placeholder="Ask KARIA anything..."
            className="flex-1 h-28 rounded-2xl bg-white/5 border border-white/10 p-5 outline-none resize-none focus:border-emerald-400"
          />

          <button
            onClick={askAI}
            disabled={loading}
            className="px-10 rounded-2xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 font-bold transition-all duration-300 hover:scale-105"
          >
            {loading ? "..." : "🚀 Send"}
          </button>

        </div>

      </div>

    </main>
  );
}