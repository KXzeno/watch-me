"use client";
import Image from "next/image";
import 'dotenv/config';

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
    event.target[0].value = "";
  };

  return (
    <main className="flex flex-col items-center justify-between p-24">

      <form onSubmit={handleSubmit} className="mb-4">
        <p className="text-center mb-2">{prompt.msg}</p>
        <div className="flex justify-center">
          <input 
            className="text-red text-center bg-black animate-pulse border-[0.1rem] hover:animate-none focus:animate-none focus:outline-none focus:border-0 rounded-lg border-white"
            placeholder="_"
          />
        </div>
      </form>

      { /* Once chosen, collide to middle col and slide down page */ }
      <p className="mt-12">Choose your Archetype:</p>
      <div className="grid grid-rows-3 grid-cols-3 gap-4 mt-4 border-black">
        <button className="hover:border-2 hover:border-x-red-600 hover:border-y-inherit">
          <p className="m-1.5">Ignorant</p>
        </button> 
        <button className="hover:border-2 hover:border-x-red-600 hover:border-y-inherit">
          <p className="m-1.5">Harmonious</p>
        </button> 
        <button className="hover:border-2 hover:border-x-red-600 hover:border-y-inherit">
          <p className="m-1.5">Dissonant</p>
        </button> 

      </div>

    </main>
);
}
