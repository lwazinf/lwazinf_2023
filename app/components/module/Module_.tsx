'use client';

import Dial_ from "./Dial_";
import { useRecoilState } from "recoil";
import { BypassState } from "../atoms/atoms";
import CallToAction_ from "./CallToAction_";

interface Module_Props {
  topic: string;
  desc: string;
  focus: Array<string>;
  knobs: any
}

const Module_ = ({ topic, desc, focus, knobs }: Module_Props) => {
  const [bypass_, setBypass_] = useRecoilState(BypassState);
  
  return (
    <div
      className={`w-[130px] ${bypass_ ? 'bg-[#2d2d35] duration-[75ms]' : 'bg-red-600 duration-[2500ms]'} h-[620px] rounded-lg moduleShadow2 transition-all p-[2px] relative scale-[0.99]`}
    >
      <Screws_ />
      <Controls_ knobs={knobs} />
      <div
        className={`w-full h-full rounded-[5px] absolute top-0 left-0 ${
          bypass_ ? "backdrop-blur-[4px]" : "backdrop-blur-[0.3px]"
        } bg-white/5`}
      />

      <Labels_ />
      <CallToAction_ />
      <div
        className={`w-full h-full rounded-[5px] absolute top-0 moduleShadow3 ${
          bypass_ ? "opacity-50" : "opacity-20"
        } duration-300 transition-all  pointer-events-none z-[4]`}
      ></div>
    </div>
  );
};

export default Module_;

// ======== Extras
// Screws_

const Screws_ = () => {
  const [bypass_, setBypass_] = useRecoilState(BypassState);
  return (
    <div
      className={`w-full h-full bg-[#ebebeb] rounded-[5px] relative duration-300 transition-all  pointer-events-none`}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center overflow-hidden z-[2] pointer-events-none`}
      >
        <img
          className={`w-[70px] object-cover absolute bottom-[8px] right-[-15px] duration-500 transition-all ${
            bypass_ ? "opacity-30" : "opacity-10"
          }`}
          src={`/assets/images/LwaziNF.png`}
        />
        <img
          className={`w-[90px] object-cover absolute top-[80px] left-[-35px] duration-500 transition-all ${
            bypass_ ? "opacity-50" : "opacity-30"
          }`}
          src={`/assets/images/LwaziNF.png`}
        />
      </div>
      {[
        "top-2 left-2",
        "top-2 right-2",
        "bottom-2 right-2",
        "bottom-2 left-2",
      ].map((obj_) => {
        return (
          <div
            className={`w-[8px] h-[8px] rounded-[50%] bg-[#2d2d35] flex flex-row justify-center items-center absolute shadow-2xl ${obj_} z-[5]`}
            key={obj_}
          >
            <div
              className={`w-full h-[6px] rounded-[50%] bg-[#ebebeb] flex flex-row justify-center items-center z-[0]`}
            >
              <img
                className={`alsolute w-full h-full scale-[1.5]`}
                src={`/assets/images/screw.png`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Labels_

const Labels_ = () => {
  return (
    <div
      className={`w-full min-h-[80px] absolute top-0 left-0 flex flex-col justify-end items-center pt-8`}
    >
      <Label_ primary_={"exp"} secondary_={"example"} />
      <Button_ primary_={"bypass"} />
    </div>
  );
};

// Label_

interface Label_Props {
  primary_: string;
  secondary_: string;
}

const Label_ = ({ primary_, secondary_ }: Label_Props) => {
  const [bypass_, setBypass_] = useRecoilState(BypassState);
  return (
    <div
      className={`w-full min-h-2 flex flex-col justify-end items-center pointer-events-none ${
        bypass_
          ? "pointer-events-none opacity-30 duration-[1000ms]"
          : "pointer-events-auto opacity-100 duration-[1000ms]"
      }`}
    >
      <p
        className={`_roboto font-semibold text-[20px] relative top-1 pointer-events-none selector-for-highlight-disabled`}
      >
        {primary_.toUpperCase()}
      </p>
      <p className={`_roboto text-[10px] font-semibold pointer-events-none selector-for-highlight-disabled`}>
        {secondary_.toUpperCase()}
      </p>
    </div>
  );
};

// Button_

interface Button_Props {
  primary_: string;
}

export const Button_ = ({ primary_ }: Button_Props) => {
  const [bypass_, setBypass_] = useRecoilState(BypassState);
  return (
    <div
      className={`min-h-2 flex flex-col justify-end items-center relative w-full ${primary_ == 'Go!' ? "top-10 " : "top-4"} z-[3]`}
    >
      <div
        className={`${primary_ == 'Go!' ? "w-[130px]" : "w-[65px]"} h-[25px] bg-[#2d2d35] flex flex-col justify-center items-center rounded-[4px] shadow-md p-[1.5px] cursor-pointer`}
      >
        <div
          className={`w-full h-full ${primary_ == 'Go!' ? 'bg-[#ffcb31]' : 'bg-[#ebebeb] hover:bg-[#e0dfdf]'} transition-all hover:duration-200 flex flex-col justify-center items-center rounded-[4px]`}
          onClick={() => {
            if(primary_ == 'Go!'){
              console.log('Go!')
            }else{
              setBypass_(!bypass_);
            }
          }}
        >
          <p className={`_roboto font-semibold text-[12px] selector-for-highlight-disabled`}>
            {primary_.toUpperCase()}
          </p>
        </div>
      </div>
      <div
        className={`w-[10px] h-[10px] rounded-[50%] my-3 flex flex-row justify-center items-center relative bg-black/10 ${primary_ == 'Go!' && 'hidden'}`}
      >
        <div
          className={`w-[10px] h-[10px] rounded-[50%] my-3 ${
            bypass_
              ? "pointer-events-none opacity-30 duration-[5000ms] bg-[#ff6868] animate-pulse"
              : "pointer-events-auto opacity-100 duration-[75ms] bg-[#68bbff]"
          } transition-all duration-200 flex flex-row justify-center items-center animate-pulse blur-[2px]`}
        />
        <div
          className={`w-full h-full flex flex-row justify-center items-center absolute top-0`}
        >
          <div
            className={`w-[8px] h-[8px] rounded-[50%] my-3 ${
              bypass_ ? "bg-[#e53939] animate-pulse" : "bg-[#1089f3]"
            } transition-all duration-200 flex flex-row justify-center items-center`}
          />
        </div>
      </div>
    </div>
  );
};

// Controls_
interface Control_Props {
  knobs: any;
}

const Controls_ = ({knobs}:Control_Props) => {
  return (
    <div
      className={`w-full min-h-2 absolute top-[150px] flex flex-col justify-center left-0 px-[1.5px]`}
    >
      {knobs.map((obj_: any, index: any) => {
        return <Knob_ primary_={obj_} index_={index} key={index} />;
      })}
    </div>
  );
};

// Knob_

interface Knob_Props {
  primary_: string,
  index_: any
}

const Knob_ = ({ primary_, index_ }: Knob_Props) => {
  const [bypass_, setBypass_] = useRecoilState(BypassState);
  return (
    <div
      className={`w-full min-h-[100px] my-1 flex flex-col justify-start items-center overflow-hidden relative ${
        bypass_
          ? "pointer-events-none opacity-60 duration-[1000ms]"
          : "pointer-events-auto opacity-100 duration-75"
      } transition-all`}
    >
      <div
        className={`rounded-[50%] w-[70px] h-[70px] border-black/50 border-dashed border-[1.5px] mt-1`}
      />
      <div
        className={`rounded-[50%] w-[70px] h-[70px] flex flex-col justify-center items-center bg-[#ebebeb] absolute top-[55px]`}
      ></div>
      {["left-[40px] rotate-[35deg]", "right-[40px] rotate-[-35deg]"].map(
        (obj_, index) => {
          return (
            <div
              className={`w-[1.5px] h-[8px] bg-black absolute bottom-[28px] ${obj_}`}
              key={index}
            />
          );
        }
      )}
      <div
        className={`w-full h-full flex flex-col justify-end items-center absolute top-0 pointer-events-none`}
      >
        <p className={`text-black _roboto font-semibold text-[12px] selector-for-highlight-disabled`}>
          {primary_.toUpperCase()}
        </p>
      </div>
      <Dial_ primary_={[primary_, index_]} />
    </div>
  );
};
