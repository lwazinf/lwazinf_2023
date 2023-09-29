"use client";

import { useState } from "react";
import MailUI_ from "../components/ui/MailUI_";
import StepUI_ from "../components/ui/StepUI_";
import ChatUI_ from "../components/ui/ChatuI_";
import LoadingUI_ from "../components/ui/LoadingUI_";
import VideoUI_ from "../components/ui/VideoUI_";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-[#b4bcc3]">
      <div
        className={`flex flex-row justify-center items-center min-w-[910px] min-h-screen`}
      >
        <StepUI_/>
        {/* <MailUI_/> */}
        <LoadingUI_/>
        {/* <ChatUI_/> */}
        <VideoUI_/>
      </div>
    </main>
  );
}