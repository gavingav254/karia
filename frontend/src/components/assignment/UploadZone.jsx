import { useRef } from "react";

export default function UploadZone({ onFileSelected }) {
  const inputRef = useRef();

  function chooseFile() {
    inputRef.current.click();
  }

  function handleChange(e) {
    const file = e.target.files[0];

    if (!file) return;

    onFileSelected(file);
  }

  return (
    <section className="mt-10">

      <div className="border-2 border-dashed border-emerald-500/40 rounded-3xl bg-white/5 p-12 text-center">

        <div className="text-6xl mb-5">
          📄
        </div>

        <h2 className="text-3xl font-bold">
          Upload Assignment
        </h2>

        <p className="text-gray-400 mt-4">
          Upload your assignment PDF.
        </p>

        <input
          ref={inputRef}
          type="file"
          accept=".pdf"
          hidden
          onChange={handleChange}
        />

        <button
          onClick={chooseFile}
          className="mt-8 px-8 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600"
        >
          Choose PDF
        </button>

      </div>

    </section>
  );
}