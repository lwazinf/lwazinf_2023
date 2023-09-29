"use client";

import {
  faBackwardStep,
  faDotCircle,
  faEllipsisV,
  faExpand,
  faForward,
  faForwardStep,
  faMessage,
  faPause,
  faPlay,
  faRotateLeft,
  faStop,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${formattedMinutes}:${formattedSeconds}`;
};

export default function VideoUI_() {
  const [animationKey, setAnimationKey] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false); // Track video play state
  const [fullTime_, setFullTime_] = useState(0);
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // Function to toggle video play state and change the icon
  const togglePlayVideo = () => {
    const element = document.getElementById("videoElement");

    if (element) {
      if (element.paused) {
        element.play();
        setIsVideoPlaying(true);
      } else {
        element.pause();
        setIsVideoPlaying(false);
      }
    }
  };

  const [isDone, setIsDone] = useState(false);

  const initDuration = (value: any) => {
    setFullTime_(value);
  };

  useEffect(() => {
    const videoElement = document.getElementById("videoElement");
    initDuration(formatTime(videoElement.duration));

    const handleTimeUpdate = () => {
      if (videoElement.currentTime === videoElement.duration) {
        setIsDone(true);
      }
    };

    if (videoElement) {
      videoElement.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  const restartButton = () => {
    setIsVideoPlaying(false);
  };

  useEffect(() => {
    if (isDone) {
      restartButton();
    }
  }, [isDone]);

  // Effect to update the icon based on video play state
  useEffect(() => {
    const playButton = document.getElementById("playButton");

    if (playButton) {
      if (isVideoPlaying) {
        playButton.classList.remove("fa-play");
        playButton.classList.add("fa-stop");
      } else {
        playButton.classList.remove("fa-stop");
        playButton.classList.add("fa-play");
      }
    }
  }, [isVideoPlaying]);

  const restartAnimation = () => {
    // Increment the animationKey to trigger a re-render and restart the animation
    setAnimationKey(animationKey + 1);
  };

  const [currentTime, setCurrentTime] = useState("00:00"); // Initialize with "00:00"

  useEffect(() => {
    const videoElement = document.getElementById("videoElement");

    if (videoElement) {
      const updateCurrentTime = () => {
        setCurrentTime(formatTime(videoElement.currentTime));
      };

      // Add an event listener for the "timeupdate" event to update the current time
      videoElement.addEventListener("timeupdate", updateCurrentTime);

      // Clean up the event listener when the component unmounts
      return () => {
        videoElement.removeEventListener("timeupdate", updateCurrentTime);
      };
    }
  }, []);

  useEffect(() => {
    const videoElement = videoRef.current;
    const progressBar = progressBarRef.current;

    if (videoElement) {
      videoElement.addEventListener("timeupdate", () => {
        const currentTime = videoElement.currentTime;
        const duration = videoElement.duration;
        const calculatedProgress = (currentTime / duration) * 100;
        setProgress(calculatedProgress);
        progressBar.style.width = `${calculatedProgress}%`;
      });
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate");
      }
    };
  }, []);

  return (
    <div
      className={`min-w-[550px] min-h-[300px] flex flex-col justify-start items-center relative overflow-hidden bg-white rounded-xl shadow-sm m-2 p-[2px]`}
    >
      <div
        className={`w-[550px] h-[300px] flex flex-col justify-start items-center relative overflow-hidden rounded-xl`}
      >
        <video controls={false} width="640" height="360" id="videoElement" ref={videoRef}>
          <source
            src="https://vod-progressive.akamaized.net/exp=1696092062~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F237%2F17%2F426185082%2F1847081228.mp4~hmac=c0ab59da6a315d7ab4a86752177cff2efae172974ee85845d6a113f668a62159/vimeo-prod-skyfire-std-us/01/237/17/426185082/1847081228.mp4?download=1&filename=production_id%3A4568686+%28720p%29.mp4"
            type="video/mp4"
          />
        </video>

        {/* <img
          className={`w-full h-full object-cover`}
          src={`https://images.pexels.com/photos/1571882/pexels-photo-1571882.jpeg?auto=compress&cs=tinysrgb&w=1600`}
        /> */}
        <div
          className={`absolute top-0 justify-between items-center flex flex-col w-full h-full`}
        >
          <div
            className={`w-full h-[60px] flex flex-row justify-between items-center`}
          >
            <div
              className={`min-w-[150px] h-full flex flex-col justify-center items-start pl-6`}
            >
              <p className={`text-[10px] text-white/80 mb-[-4px]`}>
                Episode 3 - Season 8
              </p>
              <p className={`text-[14px] text-white font-medium`}>
                Beneath The Attic
              </p>
            </div>
            <FontAwesomeIcon
              icon={faEllipsisV}
              className={`text-white/90 text-[20px] m-4 mb-8 cursor-pointer`}
            />
          </div>
          <div
            className={`w-full min-h-[60px] flex flex-col justify-center items-center opacity-30 hover:opacity-80 transition-all duration-100 hover:duration-500`}
          >
            <div
              className={`w-full min-h-[30px] flex flex-col justify-center items-center transition-all duration-200 relative`}
            >
              <div
                className={`flex flex-row items-center justify-start w-[500px] min-h-4`}
              >
                <FontAwesomeIcon
                  icon={faMessage}
                  className={`text-slate-200 hover:text-white animate-bounce transition-all duration-200 cursor-pointer ml-[100px]`}
                />
                <FontAwesomeIcon
                  icon={faMessage}
                  className={`text-slate-200 hover:text-white animate-bounce transition-all duration-200 cursor-pointer ml-[200px]`}
                />
                <FontAwesomeIcon
                  icon={faMessage}
                  className={`text-slate-200 hover:text-white animate-bounce transition-all duration-200 cursor-pointer ml-[20px]`}
                />
                <FontAwesomeIcon
                  icon={faMessage}
                  className={`text-slate-200 hover:text-white animate-bounce transition-all duration-200 cursor-pointer ml-[110px]`}
                />
              </div>
              <div
                className={`min-w-[100px] h-[7px] bg-slate-200 rounded mt-2 flex flex-row justify-center items-center animate-expand-width-and-fade relative overflow-hidden transition-all duration-200 cursor-pointer`}
              >
                <div
                  className={`w-[500px] h-[10px] rounded flex flex-row justify-start items-center animate-expand-width-and-fade relative overflow-hidden mx-[2px]`}
                >
                  <div
                  ref={progressBarRef}
                    className={`w-[${progress}%] h-1 bg-black/80 absolute rounded animate-expand-width-and-fade`}
                    // style={{
                    //   animationDuration: "10s", // Duration of the animation
                    //   animationTimingFunction: "linear", // Linear timing for a constant speed
                    //   animationFillMode: "forwards", // Keeps the final state after animation
                    // }}
                    // key={animationKey} // Add a key to the div to force a re-render on key change
                  />
                </div>
              </div>
            </div>
            <div
              className={`w-full h-[40px] flex flex-row justify-between items-start px-6 pt-2`}
            >
              <div
                className={`flex flex-row justify-center items-center min-w-0 min-h-0`}
                // onClick={togglePlayVideo}
              >
                <FontAwesomeIcon
                  icon={
                    currentTime === fullTime_
                      ? faRotateLeft
                      : isVideoPlaying
                      ? faPause
                      : faPlay
                  } // Dynamically set the icon based on video play state
                  className={`text-slate-200 hover:text-white mr-4 transition-all duration-200 cursor-pointer text-[14px]`}
                  onClick={togglePlayVideo}
                  id="playButton" // Give it an ID for easier access
                />
                <FontAwesomeIcon
                  icon={faBackwardStep}
                  onClick={() => {
                    const videoElement =
                      document.getElementById("videoElement");
                    const skipAmount = 5; // Number of seconds to skip backward

                    if (videoElement) {
                      if (videoElement.currentTime >= skipAmount) {
                        videoElement.currentTime -= skipAmount;
                      } else {
                        // Handle the case where skipping would go before the start of the video
                        // You can take appropriate action, e.g., start from the beginning
                        videoElement.currentTime = 0;
                      }
                    }
                  }}
                  className={`text-slate-200 hover:text-white mr-2 transition-all duration-200 cursor-pointer text-[14px]`}
                />
                <FontAwesomeIcon
                  icon={faForwardStep}
                  onClick={() => {
                    const videoElement =
                      document.getElementById("videoElement");
                    const skipAmount = 5; // Number of seconds to skip forward

                    if (videoElement) {
                      if (
                        videoElement.currentTime + skipAmount <=
                        videoElement.duration
                      ) {
                        videoElement.currentTime += skipAmount;
                      } else {
                        // Handle the case where skipping would exceed the video duration
                        // You can loop the video or take appropriate action
                      }
                    }
                  }}
                  className={`text-slate-200 hover:text-white mr-2 transition-all duration-200 cursor-pointer text-[14px]`}
                />
              </div>
              <div
                className={`flex flex-row justify-center items-center min-w-0 min-h-0`}
              >
                <div
                  className={`text-slate-200 hover:text-white transition-all duration-200 cursor-pointer text-[10px] font-medium mt-auto`}
                >
                  {currentTime} | {fullTime_}
                </div>
              </div>
              <div
                className={`flex flex-row justify-center items-center min-w-0 min-h-0`}
              >
                <div
                  className={`text-slate-200 hover:text-white mr-4 transition-all duration-200 cursor-pointer text-[14px] font-medium`}
                >
                  720p
                </div>
                <FontAwesomeIcon
                  icon={faExpand}
                  onClick={() => {
                    const videoElement =
                      document.getElementById("videoElement");

                    if (videoElement) {
                      if (videoElement.requestFullscreen) {
                        videoElement.requestFullscreen();
                      } else if (videoElement.mozRequestFullScreen) {
                        // Firefox
                        videoElement.mozRequestFullScreen();
                      } else if (videoElement.webkitRequestFullscreen) {
                        // Chrome, Safari, and Opera
                        videoElement.webkitRequestFullscreen();
                      } else if (videoElement.msRequestFullscreen) {
                        // IE/Edge
                        videoElement.msRequestFullscreen();
                      }
                    }
                  }}
                  className={`text-slate-200 hover:text-white mr-2 transition-all duration-200 cursor-pointer text-[14px]`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}