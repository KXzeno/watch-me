"use client";
import Image from "next/image";

export default function Home() {
  let handleClick = () => alert('Who?');
  let initialPrompt = [
    "What brings greater company than most?",
    "For what do we have an infinite appetite for?",
    "In becoming greater, who do you make your prized witness?",
  ]

  let promptRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleClick}>
        <p className="text-center mb-2">{promptRandom(initialPrompt)}</p>
        <div className="flex justify-center">
          <input className="text-black" />
        </div>
      </form>
    </main>
  );
}
