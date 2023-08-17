"use client";

import { useRecoilState } from "recoil";
import { SelectState } from "./atoms/atoms";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";

interface Focus_Props {}

const Focus_ = ({}) => {
  // Removed unnecessary parameter and destructuring
  const [select, setSelect] = useRecoilState(SelectState);
  const [playing_, setPlaying_] = useState(true);

  useEffect(() => {
    const playerObj = document.getElementById("main-player");
    if (playerObj) {
          // @ts-ignore
      if (playerObj.src !== select.video) {
          // @ts-ignore
        playerObj.src = select.video;
      }
    }
  }, [select.video]);

  const videoPlayPauseStop = (operation = true) => {
    const playerObj = document.getElementById("main-player");
    if (operation) {
          // @ts-ignore
      if (playerObj?.paused) {
          // @ts-ignore
        playerObj?.play();
        setPlaying_(true);
      } else {
          // @ts-ignore
        playerObj?.pause();
        setPlaying_(false);
      }
    } else {
          // @ts-ignore
      playerObj?.pause();
          // @ts-ignore
      playerObj.currentTime = 0;
      setPlaying_(false);
    }
  };

  return (
    <div
      className={`w-full min-h-[400px] flex flex-col justify-start items-center px-4 mt-8`}
    >
      
      <div
        className={`w-full h-[450px] flex flex-row justify-start items-center`}
      >
        <div
          className={`w-[800px] h-full flex flex-row justify-center items-center rounded-[4px] bg-black/30 m-1 relative overflow-hidden`}
        >
          <div className={`h-full object-cover`}>
            <video autoPlay id={`main-player`}>
              <source
                src={"/assets/videos/macbookCameraCoffee.mp4"}
                type="video/mp4"
              />
            </video>
          </div>
          <div
            className={`w-full h-[40px] flex flex-row justify-start items-center absolute bottom-1 px-2`}
          >
            <div
              className={`p-2 backdrop-blur-lg bg-white/10 min-w-0 m-h-0 flex flex-row justify-center
                        items-center rounded-[4px]`}
            >
              <div
                className={`mx-2 flex flex-row justify-center items-center w-4 h-4 cursor-pointer`}
                onClick={() => {
                  videoPlayPauseStop();
                }}
              >
                <FontAwesomeIcon
                  icon={playing_ ? faPause : faPlay}
                  className={`text-white/80 text-[14px] hover:text-[12px] hover:text-pink-200/80  transition-all duration-300`}
                />
              </div>
              <div
                className={`mx-2 flex flex-row justify-center items-center w-4 h-4 cursor-pointer`}
                onClick={() => {
                  videoPlayPauseStop(false);
                }}
              >
                <FontAwesomeIcon
                  icon={faStop}
                  className={`text-white/80 text-[14px] hover:text-[12px] hover:text-pink-200/80  transition-all duration-300`}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`w-[350px] h-full flex flex-col justify-center items-start rounded-[4px] m-1 ml-8`}
        >
          <div
            className={`min-w-[150px] h-[20px] flex flex-row justify-start items-center rounded-[4px] m-1 mb-4`}
          >
            <div className={`w-5 h-5 rounded-[50%] bg-black/30 mr-1`}></div>
            <p className={`text-[12px] text-black/50 tracking-[-0.5px]`}>
              {
                // @ts-ignore
                select.client
              }
            </p>
          </div>
          <div
          className={`w-[250px] min-h-0 flex flex-row justify-start items-start rounded-[4px] m-1`}
        >
          <p
            className={`text-[20px] hover:underline transition-all duration-200 cursor-pointer font-black text-black/80 Dressing_ text-pink-800`}
          >
            {
              // @ts-ignore
              select.title
            }
          </p>
        </div>
        <div
          className={`w-[350px] h-[60px] flex flex-row justify-center items-center rounded-[4px] m-1`}
        >
          <p className={`text-[12px] text-black/50 tracking-[-0.2px]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam.
          </p>
        </div>
        <div
          className={`min-w-[150px] h-[30px] flex flex-row justify-start items-center rounded-[4px] m-1 mt-3`}
        >
          <FontAwesomeIcon
            icon={faCartShopping}
            className={`text-[13px] mr-2 cursor-pointer`}
          />
          <p
            className={`text-[12px] text-black/50 hover:underline cursor-pointer tracking-[-0.5px] text-pink-600`}
          >
            {
              // @ts-ignore
              select.type
            }
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Focus_;
