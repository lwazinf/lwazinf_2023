"use client";

import { useState } from "react";
import MailUI_ from "../components/ui/MailUI_";
import StepUI_ from "../components/ui/StepUI_";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-[#b4bcc3]">
      <div
        className={`flex flex-row justify-center items-center min-w-[910px] min-h-screen`}
      >
        <StepUI_/>
        <MailUI_/>
      </div>
    </main>
  );
}