'use client'

import { useEffect, useState } from "react";
import { badges_ } from "../utils/utils";
import Dummy01_ from "./Dummy01_";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faDownLong } from "@fortawesome/free-solid-svg-icons";
import Nav_ from "./Nav_";

interface Hero_Props {}

const Hero_ = ({}: Hero_Props) => {
  const [card_, setCard_] = useState(false);
  const [idx_, setIdx_] = useState(-1);
  const [currentObj_, setCurrentObj_] = useState({
    text: "Greetings, I'm Lwazi Ndlovu, and welcome to my web design portfolio. Ready to bring your vision to life? Let's collaborate to bring your unique brand online, beautifully designed, and completed in just 5 weeks. Schedule a call to get started today!",
    link: "",
  });
  const [givenText_, setGivenText_] = useState({ first: "", second: "" });

  useEffect(() => {
    if (card_) {
      setGivenText_({
        first: currentObj_.text,
        second: givenText_.second,
      });
    } else {
      setGivenText_({
        first: givenText_.first,
        second: currentObj_.text,
      });
    }
  }, [card_]);

  return (
    <div className={`w-full h-screen overflow-hidden`} id="home">
      <img
        src={`https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2`}
        className={`w-full relative object-cover opacity-80`}
      />
      <div
        className={`w-full min-h-screen flex flex-row justify-center items-center absolute top-0 bg-white/10 backdrop-blur-md`}
      >
        <div
          className={`w-[50%] h-screen flex flex-col justify-center items-end pb-[150px]`}
        >
          <Dummy01_ />
          <div
            className={`flex flex-row justify-end items-center w-full min-h-2`}
          >
            {/* <div
              className={`w-[250px] h-full flex flex-row justify-center items-start pt-5`}
            >
              <div
                className={`w-[10px] h-[10px] bg-black/50 rounded-[50%] shadow-md m-1 hover:bg-white/80  transition-all duration-200`}
              />
              <div
                className={`w-[10px] h-[10px] bg-black/50 rounded-[50%] shadow-md m-1 hover:bg-white/80  transition-all duration-200`}
              />
              <div
                className={`w-[10px] h-[10px] bg-black/50 rounded-[50%] shadow-md m-1 hover:bg-white/80  transition-all duration-200`}
              />
            </div> */}
            <div
              className={`w-[300px] min-h-[50px] flex-col justify-center items-center grid grid-cols-5 gap-4 mt-4 mr-3 grid-rows-none`}
            >
              {badges_.map((obj_, index) => {
                return (
                  <div
                    className={`min-w-[50px] h-[50px] flex flex-col justify-center items-center ${
                      idx_ == index ? "opacity-100" : "opacity-30"
                    } hover:opacity-80 transition-all duration-200 cursor-pointer`}
                    key={index}
                    onClick={() => {
                      if (idx_ !== index) {
                        setCard_(!card_);
                        setCurrentObj_(obj_);
                        setIdx_(index);
                      } else {
                        setCard_(!card_);
                        setCurrentObj_({
                          text: "Greetings, I'm Lwazi Ndlovu, and welcome to my web design portfolio. Ready to bring your vision to life? Let's collaborate to bring your unique brand online, beautifully designed, and completed in just 5 weeks. Schedule a call to get started today!",
                          link: "",
                        });
                        setIdx_(-1);
                      }
                    }}
                  >
                    <img src={obj_.link} className={`object-cover h-[50px] `} />
                  </div>
                );
              })}
              {/* <p className={`mt-4`}>UI sample for demonstrative purposes</p> */}
            </div>
          </div>
        </div>
        <div
          className={`w-[50%] h-screen flex flex-col justify-center items-center pb-[150px]`}
        >
          <div
            className={`w-full h-[370px] flex-row justify-start items-center flex mt-2`}
          >
            <p className={`font-black text-[400px] PlayFair_ ml-8`}>I</p>
            <p
              className={`font-light text-[45px] text-red-600 Dressing_ leading-[80px] opacity-80 w-[300px] mt-12 ml-8`}
            >
              build interactive web apps for businesses
            </p>
          </div>

          <div
            className={`w-full h-[60px] flex-row justify-start items-center flex relative`}
          >
            <div
              className={`w-full h-[150px] flex-row justify-start items-start flex absolute transition-all duration-200 ${
                card_ ? "top-0 opacity-100" : "top-[-10px] opacity-0"
              }`}
            >
              <p
                className={`font-light text-[14px] leading-[20px] opacity-50 w-[550px] ml-12 italic`}
              >
                {givenText_.first}
              </p>
            </div>
            <div
              className={`w-full h-[150px] flex-row justify-start items-start flex absolute transition-all ${
                !card_
                  ? "top-0 opacity-100 duration-1000"
                  : "top-[-10px] opacity-0 duration-0"
              }`}
            >
              <p
                className={`font-light text-[14px] leading-[20px] opacity-50 w-[550px] ml-12 italic`}
              >
                {givenText_.second}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Nav_ />
      <div
        className={`absolute bottom-0 w-full min-h-2 flex flex-col justify-center items-center`}
      >
        <a href={`#focus1`}>
          <div
            className={`min-w-2 min-h-2 flex flex-col justify-center items-center cursor-pointer opacity-60 hover:opacity-80 transition-all duration-200`}
          >
            <img
              className={`h-[80px] object-cover opacity-100 mb-2`}
              src={`assets/images/LwaziNF.png`}
            />
            <p className={`font-normal text-[13px] leading-[20px] opacity-80`}>
              View Projects
            </p>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`animate-bounce mb-4 text-[15px] mt-2`}
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero_;
