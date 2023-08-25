"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RecoilRoot } from "recoil";
import Dummy01_, { Dummy02_ } from "./components/Dummy01_";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "LwaziNF's Portfolio",
  description: "Welcome to Lwazi Ndlovu's Web Design portfolio..",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* @ts-ignore */}
      <title>{metadata?.title}</title>
      <body className={inter.className}>
        <RecoilRoot>
          <div className={`w-full h-screen overflow-hidden`} id="home">
            {/* <Nav_ /> */}
            <img
              src={`https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
              className={`w-full relative object-cover opacity-80`}
            />
            <div
              className={`w-full min-h-screen flex flex-row justify-center items-center absolute top-0 bg-white/10 backdrop-blur-md`}
            >
              <div
                className={`w-[50%] h-screen flex flex-col justify-center items-end`}
              >
                <Dummy01_ />
                <div
                  className={`w-[300px] h-[250px] flex-col justify-center items-center grid grid-cols-4 gap-4 mt-4 grid-rows-none`}
                >
                  {[
                    "https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png",
                    "https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1080px-Postgresql_elephant.svg.png?20080116191800",
                    "https://seeklogo.com/images/G/git-logo-CD8D6F1C09-seeklogo.com.png",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png?20221110153201",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/726px-CSS3_logo_and_wordmark.svg.png?20160530175649",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png?20170517184425",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1024px-MetaMask_Fox.svg.png?20220831120339",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/512px-Ethereum_logo_2014.svg.png?20161015085252",
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png?20230318122128",
                  ].map((obj_, index) => {
                    return (
                      <div
                        className={`min-w-[50px] h-[50px] flex flex-col justify-center items-center opacity-50 hover:opacity-80 transition-all duration-200 cursor-pointer`}
                        key={index}
                      >
                        <img src={obj_} className={`object-cover h-[50px] `} />
                      </div>
                    );
                  })}
                  {/* <p className={`mt-4`}>UI sample for demonstrative purposes</p> */}
                </div>
              </div>
              <div
                className={`w-[50%] h-screen flex flex-col justify-center items-center`}
              >
                <div
                  className={`w-full h-[320px] flex-row justify-start items-center flex mt-2`}
                >
                  <p className={`font-black text-[400px] PlayFair_ ml-8`}>I</p>
                  <p
                    className={`font-light text-[45px] Dressing_ leading-[80px] opacity-50 w-[50px] mt-10 ml-8`}
                  >
                    build JavaScript web applications
                  </p>
                </div>

                <div
                  className={`w-full h-[150px] flex-row justify-start items-center flex`}
                >
                  <p
                    className={`font-light text-[14px] leading-[20px] opacity-50 w-[550px] ml-12 italic`}
                  >
                    I use Tailwind CSS to make websites look awesome without spending forever on coding. Its like a magic toolkit that helps me create cool designs, make things fit on all screens, and add interactive stuff easily. Its like coding with shortcuts, so I can focus on making things look great and work smoothly. Whether its a simple page or something more complex, Tailwind makes me feel like a design superhero!
                  </p>
                </div>

              </div>
            </div>
          </div>
          {children}
        </RecoilRoot>
      </body>
    </html>
  );
}
