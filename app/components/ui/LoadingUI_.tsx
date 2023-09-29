"use client";

import { useState } from "react";

export default function LoadingUI_() {
  const [animationKey, setAnimationKey] = useState(0);

  const restartAnimation = () => {
    // Increment the animationKey to trigger a re-render and restart the animation
    setAnimationKey(animationKey + 1);
  };
  return (
    <div
      className={`w-[350px] h-[300px] flex flex-col justify-center items-center relative overflow-hidden bg-white rounded-xl shadow-sm m-2`}
    >
      <div
        className={`min-w-2 min-h-2 flex flex-col justify-center items-center cursor-pointer transition-all duration-200`}
      >
        <img
          className={`h-[80px] object-cover  opacity-80 hover:opacity-60 mb-2 animate-bounce`}
          src={`assets/images/LwaziNF.png`}
          onClick={restartAnimation} // Call restartAnimation on image click
        />
        <div
          className={`min-w-[100px] h-2 bg-slate-200 rounded mt-2 flex flex-row justify-center items-center animate-expand-width-and-fade relative overflow-hidden`}
          key={animationKey} // Add a key to the div to force a re-render on key change
        >
          <div
            className={`w-[100px] h-2 rounded flex flex-row justify-center items-center animate-expand-width-and-fade relative overflow-hidden mx-[2px]`}
            key={animationKey} // Add a key to the div to force a re-render on key change
          >
            <div
              className={`w-[0%] h-1 blur-sm rounded animate-expand-width-and-fade`}
              style={{
                animationDuration: "10s", // Duration of the animation
                animationTimingFunction: "linear", // Linear timing for a constant speed
                animationFillMode: "forwards", // Keeps the final state after animation
              }}
            />
            <div
              className={`w-[0%] h-1 bg-black/80 absolute rounded animate-expand-width-and-fade`}
              style={{
                animationDuration: "10s", // Duration of the animation
                animationTimingFunction: "linear", // Linear timing for a constant speed
                animationFillMode: "forwards", // Keeps the final state after animation
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
