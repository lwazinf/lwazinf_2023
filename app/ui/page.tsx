"use client";

import { useState } from "react";
import MailUI_ from "../components/ui/MailUI_";
import StepUI_ from "../components/ui/StepUI_";
import ChatUI_ from "../components/ui/ChatuI_";
import LoadingUI_ from "../components/ui/LoadingUI_";
import VideoUI_ from "../components/ui/VideoUI_";
import MenuUI_ from "../components/ui/MenuUI_";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-[#b4bcc3]">
      <div
        className={`flex flex-col justify-center items-center min-w-[910px] min-h-screen rotate-[0deg]`}
      >
        {/* <div className={`w-[500px] h-[500px] absolute`}>
          <div
            className={`w-full h-full relative flex flex-col justify-center items-center overflow-hidden opacity-20`}
          >
            <img
              src={`/assets/images/LwaziNF.png`}
              className={`w-[50px] object-cover right-[80px] absolute rotate-[20deg]`}
            />
            <img
              src={`/assets/images/LwaziNF.png`}
              className={`w-[50px] object-cover bottom-[200px] absolute rotate-[20deg]`}
            />
            <img
              src={`/assets/images/LwaziNF.png`}
              className={`w-[70px] object-cover right-1 top-[20px] absolute rotate-[5deg]`}
            />
            <img
              src={`/assets/images/LwaziNF.png`}
              className={`w-[100px] object-cover left-[10px] top-[150px] absolute rotate-[40deg]`}
            />
            <img
              src={`/assets/images/LwaziNF.png`}
              className={`w-[50px] object-cover top-[80px] left-0 absolute -rotate-[10deg]`}
            />
            <img
              src={`/assets/images/LwaziNF.png`}
              className={`w-[80px] object-cover top-[0px] left-9 absolute -rotate-[80deg]`}
            />
            <img
              src={`/assets/images/LwaziNF.png`}
              className={`w-[60px] object-cover top-20 left-[70px] absolute rotate-[90deg]`}
            />
            <img
              src={`/assets/images/LwaziNF.png`}
              className={`w-[60px] object-cover bottom-[170px] left-[20px] absolute -rotate-[110deg]`}
            />
            <img
              src={`/assets/images/LwaziNF.png`}
              className={`w-[170px] object-cover top-[60px] left-[150px] absolute -rotate-[40deg]`}
            />
            <img
              src={`/assets/images/LwaziNF.png`}
              className={`w-[90px] object-cover bottom-20 absolute rotate-[90deg]`}
            />
            <img
              src={`/assets/images/LwaziNF.png`}
              className={`w-[70px] object-cover bottom-20 left-5 absolute -rotate-[30deg]`}
            />
            <img
              src={`/assets/images/LwaziNF.png`}
              className={`w-[50px] object-cover bottom-[85px] left-[90px] absolute -rotate-[3deg]`}
            />
            <img
              src={`/assets/images/LwaziNF.png`}
              className={`w-[40px] object-cover bottom-[85px] left-[150px] absolute -rotate-[70deg]`}
            />
            <img
              src={`/assets/images/LwaziNF.png`}
              className={`w-[130px] object-cover bottom-[120px] left-[80px] absolute rotate-[60deg]`}
            />
          </div>
        </div> */}
        <div
          className={`flex flex-row justify-center items-center min-w-0 min-h-0`}
        >
          <LoadingUI_ />
          <StepUI_ />
          <MailUI_ />
        </div>
        <div
          className={`flex flex-row justify-center items-center min-w-0 min-h-0`}
        >
          <VideoUI_ />
          <MenuUI_ />
          {/* <ChatUI_ /> */}
        </div>
      </div>
    </main>
  );
}
