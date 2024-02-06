"use client";
import Image from "next/image";

export default function Home() {
  let handleClick = () => alert('Who?');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form onSubmit={handleClick}>
        <input 
          className="text-black"
        />
      </form>
    </main>
  );
}
