"use client";

import { Button_ } from "./Module_";
import styles from './switch.module.css'
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Prompt1State, Prompt2State, Prompt3State, PromptState } from "../atoms/atoms";

interface CallToAction_Props {}

const CallToAction_ = ({}: CallToAction_Props) => {
  const [prompt_, setPrompt_] = useRecoilState(PromptState);
  const [prompt1_, setPrompt1_] = useRecoilState(Prompt1State);
  const [prompt2_, setPrompt2_] = useRecoilState(Prompt2State);
  const [prompt3_, setPrompt3_] = useRecoilState(Prompt3State);

//   const groq = new Groq({
//     apiKey: "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",
//     dangerouslyAllowBrowser: true,
//   });

//   async function runGroq() {
//     const completion = await groq.chat.completions.create({
//       messages: [
//         {
//           role: "user",
//           content: `write an emmersive sci fi story about cars`,
//         },
//       ],
//       model: "mixtral-8x7b-32768",
//     });
//     console.log(completion.choices[0]?.message?.content.replace('\n\n', '').split(/\d+\.\ /) || "");
//   }
  
  const [checked_, setChecked_] = useState(true)

  const timeSwitch_ = () => {
    setChecked_(false)
    const timeoutID = setTimeout(() => {
      setChecked_(true);
    }, 450);

    return () => {
      clearTimeout(timeoutID);
    };
  }
  return (
    <div
      className={`w-full min-h-[80px] absolute bottom-[-20px] -rotate-90 scale-[0.6] right-[-70px] flex flex-col justify-end items-center`}
    >
      <label className={styles.switch}>
        <input type={'checkbox'} checked={checked_} onClick={() => {
          // runGroq();
          timeSwitch_()
          console.log([prompt_, prompt1_, prompt2_, prompt3_])
        }} />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default CallToAction_;