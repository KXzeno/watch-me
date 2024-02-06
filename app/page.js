"use client";
import Image from "next/image";

export default function Home() {
  /* Initial prompt renderer */
  let initialPrompt = [
    {
      id: 1,
      msg: "What brings greater company than most?",
      ans: "silence",
    },
    {
      id: 2,
      msg: "For what do we have an infinite appetite for?",
      ans: "distraction",
    },
    {
      id: 3,
      msg: "In becoming greater, who do you make your prized witness?",
      ans: "myself",
    },
  ]

  let promptRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
  let prompt = promptRandom(initialPrompt);

  /* Prompt submit state checker */
  let handleSubmit = (event) => {
    event.preventDefault();
    event.target[0].value.toUpperCase() === prompt.ans.toUpperCase() && alert('Correct');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleSubmit}>
        <p className="text-center mb-2">{prompt.msg}</p>
        <div className="flex justify-center">
          <input className="text-black text-center" />
        </div>
      </form>
    </main>
  );
}
