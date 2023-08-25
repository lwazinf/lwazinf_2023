"use client";

import { useRecoilState } from "recoil";
import { SelectState, SelectedState, PlayState } from "./atoms/atoms";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faPause,
  faPlay,
  faStop,
} from "@fortawesome/free-solid-svg-icons";

interface Focus_Props {}

const Focus_ = ({}) => {
  // Removed unnecessary parameter and destructuring
  const [select, setSelect] = useRecoilState(SelectState);
  const [selected, setSelected] = useRecoilState(SelectedState);
  const [playing_, setPlaying_] = useRecoilState(PlayState);

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

  useEffect(() => {
    const playerObj = document.getElementById("main-player");
    if (playerObj) {
      const updateTime = () => {
        const currentTime = playerObj.currentTime;
        const duration = playerObj.duration;

        const formatTime = (time) => {
          const minutes = Math.floor(time / 60);
          const seconds = Math.floor(time % 60);
          return `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;
        };

        if (currentTime === 0) {
          // Video is at 00:00
          setPlaying_(false);
        } else if (currentTime === duration) {
          // Video has ended
          setPlaying_(false);
        }
      };

      playerObj.addEventListener("timeupdate", updateTime);
      playerObj.addEventListener("ended", updateTime);

      return () => {
        playerObj.removeEventListener("timeupdate", updateTime);
        playerObj.removeEventListener("ended", updateTime);
      };
    }
  }, []);

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

  const [loaded_, setLoaded_] = useState(false);
  const checkLoading = () => {
    const videoElement = document.getElementById("main-player");

    videoElement?.addEventListener("loadstart", () => {
      setLoaded_(false);
    });

    videoElement?.addEventListener("loadeddata", () => {
      setLoaded_(true);
    });
  };
  
  useEffect(() => {
    checkLoading()
  }, [])

  return (
    <div
      className={`w-full min-h-[400px] flex flex-col justify-start items-center px-4 mt-8`}
    >
      <div
        className={`w-full h-[450px] flex flex-row justify-start items-center`}
      >
        <div
          className={`w-[800px] h-full flex flex-row justify-center items-center rounded-[4px] bg-black/30 m-1 relative overflow-hidden ${loaded_ ? 'opacity-100 duration-500' : 'opacity-0 duration-0'} transition-all`}
        >
          <div className={`h-full object-cover`}>
            <video autoPlay id={`main-player`}>
              <source
                src={"https://vod-progressive.akamaized.net/exp=1693034935~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3870%2F20%2F519352883%2F2419961370.mp4~hmac=c48c80f00a7d2be77aa04a689807690229fcd32d5db81abb3dfe8d93b7393f90/vimeo-prod-skyfire-std-us/01/3870/20/519352883/2419961370.mp4?download=1&filename=pexels-tima-miroshnichenko-7033786+%28360p%29.mp4"}
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
          className={`w-[350px] h-full flex flex-col justify-center items-start rounded-[4px] m-1 ml-8 ${
            loaded_ && selected
              ? "opacity-100 pointer-events-auto duration-[350ms]"
              : "opacity-0 pointer-events-none duration-0"
          } transition-all`}
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
