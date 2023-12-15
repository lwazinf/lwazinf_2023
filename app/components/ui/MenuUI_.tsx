import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faHome, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";

export default function MenuUI_() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 150 });
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [currentItem_, setCurrentItem_] = useState("");
  const [currentPage_, setCurrentPage_] = useState("");

  const handleMouseEnter = (value: string) => {
    setCurrentItem_(value);
    setIsMouseInside(true);
  };

  const handleMouseLeave = () => {
    setCurrentItem_("");
    setIsMouseInside(false);
  };

  const handleMouseMove = (ev: any) => {
    const container = containerRef.current;
    if (container && isMouseInside) {
    // @ts-ignore
      const containerRect = container.getBoundingClientRect();
      const relativeY = ev.clientY - containerRect.top;
      setMousePosition({ x: ev.clientX, y: relativeY });
    }
  };

  const textStyles = { top: `${mousePosition.y}px` };

  return (
    <div
      ref={containerRef}
      className={`w-[350px] h-[300px] flex flex-col justify-end items-start relative bg-white rounded-xl shadow-sm m-2 p-[2px]`}
    >
      <div
        className={`w-full h-full rounded-xl flex flex-row justify-start items-center relative overflow-hidden`}
      >
        <div
          className={`w-full h-full rounded-xl flex flex-col justify-center items-center absolute top-0 overflow-hidden duration-100 transition-all`}
        >
          <img
              className={`h-[110px] object-cover duration-500 transition-all opacity-10`}
              src={`assets/images/LwaziNF.png`}
            />
        </div>
        <div
          style={textStyles}
          className={`${
            isMouseInside ? "opacity-100 left-[60px]" : "opacity-0 left-[30px]"
          } absolute transition-all duration-200 min-w-0 min-h-0 rounded-[4px] bg-black/80 text-slate-200/80 text-[10px] p-[1px] px-1 pl-2`}
        >
          {currentItem_}
        </div>
        <div
          className={`w-[30%] h-[300px] flex flex-row justify-start items-center relative overflow-hidden rounded-xl rounded-r-[4px] pr-[60px] hover:pr-[55px] transition-all duration-500 hover:duration-200`}
        >
          <div
            className={`h-full w-full bg-[#333333] rounded-xl rounded-r-[4px] flex flex-col justify-center items-center px-1`}
          >
            <div
              className={`w-full min-h-0 py-3 rounded-[2px] bg-transparent text-white hover:animate-pulse flex flex-col justify-center items-center cursor-pointer my-[2px] transition-all duration-500`}
              onMouseEnter={() => {
                handleMouseEnter("Home");
              }}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              onClick={() => {
                setCurrentPage_("Home");
              }}
            >
              <FontAwesomeIcon icon={faHome} className={``} />
            </div>
            <div
              className={`w-full min-h-0 py-3 rounded-[2px] bg-transparent text-white hover:animate-pulse flex flex-col justify-center items-center cursor-pointer my-[2px] transition-all duration-500`}
              onMouseEnter={() => {
                handleMouseEnter("User");
              }}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              onClick={() => {
                setCurrentPage_("User");
              }}
            >
              <FontAwesomeIcon icon={faUser} className={``} />
            </div>
            <div
              className={`w-full min-h-0 py-3 rounded-[2px] bg-transparent text-white hover:animate-pulse flex flex-col justify-center items-center cursor-pointer my-[2px] transition-all duration-500`}
              onMouseEnter={() => {
                handleMouseEnter("Twitter");
              }}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              onClick={() => {
                // setCurrentPage_("Search");
              }}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/lwazinf"
              >
                <FontAwesomeIcon icon={faTwitter} className={``} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
