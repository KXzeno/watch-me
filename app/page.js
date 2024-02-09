"use client";
/* Global imports */
import React from 'react';
import Image from "next/image";
import 'dotenv/config';

/* Local imports */
import { 
  prompt,
} from './components';

export default function Home() {

  /* Prevent rendering from btn/form submits */
  const preventDefault = async (event) => await event.preventDefault();
  const zeroRender = async () => await preventDefault(event);

  /* Prompt submit state checker */
  let handleSubmit = async (event) => {
    await preventDefault(event);
    event.target[0].value.toUpperCase() === prompt.ans.toUpperCase() && alert('Correct');
    event.target[0].value = "";
  };

  /* Prompt prerender */
  let [initPrompt, setInitPrompt] = React.useState(
    <form onSubmit={handleSubmit} className="mb-4">
      <p className="text-center mb-2">{prompt.msg}</p>
      <div className="flex justify-center">
        <input 
          className="text-red text-center bg-black animate-pulse border-[0.1rem] hover:animate-none focus:animate-none focus:outline-none focus:border-0 rounded-lg border-white"
          placeholder="_"
        />
      </div>
    </form>
  );

  /* Expand archetype values */
  let [fati, setFati] = React.useState(<p className="m-1.5 hover:animate-bounce">Fati</p>);

  let showChildren = (event) => {
    preventDefault(event);
    let children = (
      <div className="grid grid-cols-3">
        <button className="archetype-btn">
          <p className="m-1.5">Ignorant</p>
        </button>
        <button className="archetype-btn">
          <p className="m-1.5">Harmonious</p>
        </button>
        <button className="archetype-btn">
          <p className="m-1.5">Dissonant</p>
        </button> 
      </div>
    );
    setFati(children);
    setInitPrompt("");
  }

  return (
    <main className="flex flex-col items-center justify-between p-24">
      {initPrompt}
      { /* Once chosen, collide to middle col and slide down page */ }
      { /* Make 1 col default, when active expand to more columns, do previous comment's action when one is chosen then slide to after "Archetype:" instead */ }
      <p className="mt-12">Choose your Archetype:</p>
      <div className="mt-4 border-black">
        <div onClick={showChildren} style={{cursor: 'pointer'}}>
          {fati}
        </div>
      </div>
    </main>
  );
}
