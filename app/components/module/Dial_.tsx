// @ts-nocheck
"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import { BypassState, PromptState, Prompt1State, Prompt2State, Prompt3State } from "../atoms/atoms";

interface Dial_Props {
  primary_: any;
}

const Dial_ = ({ primary_ }: Dial_Props) => {
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState(215);
  const [prompt_, setPrompt_] = useRecoilState(PromptState);
  const [prompt1_, setPrompt1_] = useRecoilState(Prompt1State);
  const [prompt2_, setPrompt2_] = useRecoilState(Prompt2State);
  const [prompt3_, setPrompt3_] = useRecoilState(Prompt3State);
  const dialRef = useRef(null);
  const dialSize = 50; // diameter of the dial
  const dotRadius = 4; // diameter of the red dot

  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const rect = dialRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x2 = e.clientX;
      const y2 = e.clientY;

      const deltaX = centerX - x2;
      const deltaY = centerY - y2;

      const rad = Math.atan2(deltaY, deltaX);
      let deg = rad * (180 / Math.PI);
      deg -= 90; // Adjust for initial rotation

      // Convert negative angles to positive
      if (deg < 0) {
        deg = 360 + deg;
      }

      // Limit rotation between 145 and 215 degrees
      if (deg >= 145 && deg <= 215) {
        return;
      }

      setRotation(deg);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`min-w-0 min-h-0 flex flex-col justify-center items-center absolute top-[13px] z-[3] transition-all`}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`w-[50px] h-[50px] rounded-[50%] relative overflow-hidden btn`}
      >
        <div
          className={`w-full h-full hover:bg-black/10 transition-all hover:duration-75 duration-500 rounded-[50%] flex flex-col items-center p-2 absolute top-0 cursor-pointer`}
          id={`dial`}
          ref={dialRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isDragging ? "none" : "transform 0.2s ease",
          }}
        >
          <div className={`w-[4px] h-[15px] bg-black/50 rounded-[4px]`} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-gray-600">
            {/* {Math.round(rotation)} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dial_;