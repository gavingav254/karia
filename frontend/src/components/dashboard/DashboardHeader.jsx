export default function DashboardHeader() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  return (
    <section className="mb-12">

      <p className="text-emerald-400 text-lg font-semibold">
        {greeting} 👋
      </p>

      <h1 className="text-5xl font-black mt-2">
        Welcome to KARIA
      </h1>

      <p className="text-gray-400 mt-4 max-w-2xl text-lg leading-8">
        Your intelligent university workspace designed to help you
        organize academics, collaborate effectively and discover
        opportunities that match your skills.
      </p>

    </section>
  );
}