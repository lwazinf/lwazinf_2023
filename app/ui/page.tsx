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
