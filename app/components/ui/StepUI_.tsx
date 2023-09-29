"use client";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function StepUI_() {
  const [currentStep_, setCurrentStep_] = useState(1)
  return (
        <div
          className={`w-[450px] h-[300px] flex flex-col justify-start items-center relative overflow-hidden bg-white rounded-2xl shadow-sm px-8 m-2`}
        >
          <div
            className={`w-full h-[25%] flex flex-row justify-between items-end pb-1`}
          >
            {
              [1, 2, 3, 4].map((obj_, index) => {
                return (
                  <Step_ currentStep={currentStep_} step={obj_} key={index} />
                )
              })
            }
          </div>
          <div
            className={`w-full h-[50%] flex flex-col justify-start items-start`}
          >
            <div
              className={`mt-8 h-6 w-40 rounded bg-slate-200 animate-pulse`}
            />
            <div className={`mt-4 space-y-2 min-h-2 min-w-0`}>
            <div className={`h-4 w-[300px] rounded bg-slate-200 animate-pulse`} />
              <div className={`h-4 w-[350px] rounded bg-slate-200 animate-pulse`} />
              <div className={`h-4 w-[250px] rounded bg-slate-200 animate-pulse`} />
            </div>
          </div>
          <div
            className={`w-full h-[25%] flex flex-row justify-between items-center`}
          >
            <div
              className={`min-w-2 min-h-2 p-2 py-1 flex flex-row justify-center items-center rounded-[4px] text-slate-400 hover:text-slate-600 text-[14px] transition-all duration-200 ${currentStep_ > 1 ? 'opacity-100 cursor-pointer' : 'opacity-0 cursor-default'}`}
              onClick={() => {
                if(currentStep_ > 1){
                  setCurrentStep_(currentStep_-1)
                }
              }}
            >
              Back
            </div>
            <div
              className={`min-w-2 min-h-2 p-3 py-1 flex flex-row justify-center items-center bg-black/80 hover:bg-black/70 rounded-[20px] text-white text-[14px] transition-all duration-200 cursor-pointer`}
              onClick={() => {
                if(currentStep_ < [1, 2, 3, 4].length+1){
                  setCurrentStep_(currentStep_+1)
                }
              }}
            >
              { currentStep_ < [1, 2, 3, 4].length+1 ? 'Continue' : 'Done'}
            </div>
          </div>
        </div>
  );
}

interface Step_Props {
  step: number;
  currentStep: number;
}

const Step_ = ({ step, currentStep }: Step_Props) => {
  return (
    <div
      className={`w-[35px] h-[35px] rounded-[50%] cursor-pointer ${
        currentStep >= step
          ? "bg-black/80 text-black/80"
          : "bg-slate-200 text-slate-400 hover:bg-black/20 hover:text-black/20"
      } flex flex-col justify-center items-center transition-all duration-500 ${ currentStep > step ? "bg-black/20 p-[3px]" : "p-[2px]"}`}
    >
      <div
        className={`w-full h-full rounded-[50%] ${ currentStep > step ? "bg-black/80 text-white" : "bg-white"} flex flex-col justify-center items-center cursor-pointer transition-all duration-75`}
      >
        { currentStep > step ? <FontAwesomeIcon icon={faCheck} className={``}/> : step }
      </div>
    </div>
  );
};
