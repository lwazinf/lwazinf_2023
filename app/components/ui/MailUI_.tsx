"use client";

import {
  faAngleRight,
  faArchive,
  faCheck,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function MailUI_() {
  const [tempMail_, setTempMail_] = useState<any>([]);
  const [IdxList_, setIdxList_] = useState<any>([]);
  let base = 4;
  let t = (d: number) => d * base;
  const data_ = [
    {
      title: "Your funds have been processed",
      message: "See your latest deposit online",
    },
    {
      title: "Nintendo is back in the spotlight",
      message: "The long awaited Nintendo Switch has been..",
    },
    {
      title: "Sammy has a new Profile Picture",
      message: "Looks like you've been tagged!",
    },
    {
      title: "Welcome to ChatGPT, here's a look.",
      message: "ChatGPT helps you when no one can",
    },
  ];

  const addItemToTempMail = () => {
    const newItem = data_.find(
      (item) =>
        !tempMail_.some(
          (existingItem: any) => existingItem.title === item.title
        )
    );

    if (newItem) {
      setTempMail_((prevTempMail: any) => [...prevTempMail, newItem]);
    }
  };

  return (
    <div
      className={`w-[350px] h-[300px] flex flex-col justify-start items-center relative overflow-hidden bg-white rounded-xl shadow-sm m-2`}
    >
      <div
        className={`w-full min-h-[18%] flex flex-row justify-between items-center border-b-[1px] border-solid border-slate-200 px-4`}
      >
        <div className={`relative`} onClick={() => addItemToTempMail()}>
          <FontAwesomeIcon
            icon={faEnvelope}
            className={`text-slate-300 hover:text-slate-600 text-[18px] transition-all duration-500 cursor-pointer`}
          />
        </div>
        <div
          className={`relative`}
          onClick={() => {
            let tempList_ = tempMail_;
            let cleanList_ = tempList_.filter(
              (_: any, index: any) => !IdxList_.includes(index)
            );

            setIdxList_([]); // Optional: Clear the index list if needed
            setTempMail_(cleanList_);
          }}
        >
          <FontAwesomeIcon
            icon={faArchive}
            className={`text-slate-300 hover:text-slate-600 text-[18px] transition-all duration-500 cursor-pointer`}
          />
          <div
            className={`absolute top-[-6px] left-[-10px] bg-black/80 rounded-[50%] w-[15px] h-[15px] flex flex-col justify-center items-center text-[9px] text-white ${
              IdxList_.length == 0
                ? "opacity-0 duration-0"
                : "opacity-100 duration-500"
            } transition-all pointer-events-none`}
          >
            {IdxList_.length}
          </div>
        </div>
      </div>
      <AnimatePresence>
        <div
          className={`w-full min-h-full flex flex-col justify-start items-start px-1 py-4 overflow-scroll pb-[70px]`}
        >
          {tempMail_.map((obj_: any, index: any) => {
            return (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: t(0.015),
                  type: "spring",
                  bounce: 0.3,
                }}
                animate={{
                  height: "auto",
                  opacity: 1,
                  transition: {
                    type: "spring",
                    // delay: t(0.05),
                  },
                }}
                className={`${
                  IdxList_.includes(index) &&
                  "hover:bg-black/50 bg-black/80"
                } w-full rounded-[3px] transition-all duration-500 my-[1px]`}
                key={index}
                onClick={() => {
                  if (IdxList_.includes(index)) {
                    const IdxList__ = IdxList_.filter((obj__: any) => {
                      return obj__ !== index;
                    });
                    setIdxList_(IdxList__);
                  } else {
                    // adding index to selected
                    const IdxList__ = [...IdxList_, index];
                    setIdxList_(IdxList__);
                  }
                }}
              >
                <Mail_
                  data={obj_}
                  inList={IdxList_.includes(index)}
                  key={index}
                />
              </motion.div>
            );
          })}
        </div>
      </AnimatePresence>
    </div>
  );
}

interface Mail_Props {
  data: any;
  inList: any;
}

const Mail_ = ({ data, inList }: Mail_Props) => {
  return (
    <div
      className={`w-full min-h-2 flex flex-row justify-center items-center cursor-pointer hover:pl-5 hover:pr-3 pl-3 pr-2 transition-all duration-200`}
    >
      <div
        className={`w-full min-h-2 flex flex-col justify-center items-start py-2 transition-all duration-200 relative hover:pr-2 ${
          inList ? "opacity-100" : "opacity-60 hover:opacity-100"
        }`}
      >
        {/* <div className={`h-6 w-40 rounded bg-slate-200 animate-pulse my-1`} /> */}
        <p
          className={`text-[14px] ${
            inList ? "text-slate-100 font-medium" : "text-slate-600 font-[400]"
          }`}
        >
          {data.title}
        </p>
        {/* <div className={`h-4 w-[150px] rounded bg-slate-200 animate-pulse my-1`} /> */}
        <p
          className={`text-[12px] ${
            inList
              ? "text-slate-100/70 font-medium"
              : "text-slate-400 font-[300]"
          }`}
        >
          {data.message}
        </p>
      </div>
      <div className={`h-full flex flex-col justify-center items-center mr-3`}>
        <FontAwesomeIcon
          icon={faAngleRight}
          className={`opacity-50 text-[12px] animate-bounce-horizontal ${
            inList ? "text-white/80 font-medium" : "text-slate-400 font-[300]"
          }`}
          style={{
            animationName: "bounceHorizontal",
            animationDuration: "1s", // Adjust the duration as needed
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          }}
        />
      </div>
    </div>
  );
};
