"use client";

import {
  faArchive,
  faCheck,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Result } from "postcss";
import { useState } from "react";

export default function MailUI_() {
  const [tempMail_, setTempMail_] = useState<{title: string, message: string}>([]);
  const [IdxList_, setIdxList_] = useState<any>([]);
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
      title: "Your funds have been processed",
      message: "See your latest deposit online",
    },
    {
      title: "Welcome to ChatGPT, here's a look.",
      message: "ChatGPT helps you when no one can",
    },
  ];
  return (
    <div
      className={`w-[350px] h-[300px] flex flex-col justify-start items-center relative overflow-hidden bg-white rounded-xl shadow-sm m-2`}
    >
      <div
        className={`w-full min-h-[18%] flex flex-row justify-between items-center border-b-[1px] border-solid border-slate-200 px-4`}
      >
        <div
          className={`relative`}
          onClick={() => {
            // console.log(data_.includes(tempMail_[0]))
            // data_.length-1
            let newItem = data_[0];

            if (!tempMail_.includes(newItem)) {
              let temp_ = [...tempMail_, newItem];
              setTempMail_(temp_);
            }
          }}
        >
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
              (_, index) => !IdxList_.includes(index)
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
            className={`absolute top-[-6px] left-[-10px] bg-[#35a7ff] rounded-[50%] w-[15px] h-[15px] flex flex-col justify-center items-center text-[9px] text-white ${
              IdxList_.length == 0
                ? "opacity-0 duration-0"
                : "opacity-100 duration-500"
            } transition-all pointer-events-none`}
          >
            {IdxList_.length}
          </div>
        </div>
      </div>
      <div
        className={`w-full min-h-full flex flex-col justify-start items-start px-1 py-4 overflow-scroll pb-[70px]`}
      >
        {tempMail_.map((obj_: any, index: any) => {
          return (
            <div
              className={`${
                IdxList_.includes(index) && "hover:bg-[#35a7ff] bg-[#35a7ff99]"
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
            </div>
          );
        })}
      </div>
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
      className={`w-full min-h-2 flex flex-col justify-center items-start py-2 cursor-pointer hover:pl-5 px-3 transition-all duration-200 ${
        inList ? "opacity-100" : "opacity-60 hover:opacity-100"
      }`}
    >
      <p
        className={`text-[14px] ${
          inList ? "text-slate-100 font-medium" : "text-slate-600 font-[400]"
        }`}
      >
        {data.title}
      </p>
      <p
        className={`text-[12px] ${
          inList ? "text-slate-100/70 font-medium" : "text-slate-400 font-[300]"
        }`}
      >
        {data.message}
      </p>
    </div>
  );
};
