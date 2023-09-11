import {
  faAdd,
  faCoins,
  faImage,
  faPaperPlane,
  faPeopleGroup,
  faPlane,
  faTrophy,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";

import { faEthereum } from "@fortawesome/free-brands-svg-icons";

interface Dummy01_Props {}

const Dummy01_ = ({}: Dummy01_Props) => {
  const [fund_, setFund_] = useState(0.1);
  const [spots_, setSpots_] = useState("N/A");
  const [split_, setSplit_] = useState("3");
  const [body_, setBody_] = useState("");
  const [position_, setPosition_] = useState("right-[130px]");
  const [visibility_, setVisibility_] = useState(
    "opacity-0 pointer-events-none"
  );

  const [current_, setCurrent_] = useState(0);
  const charCount_ = 140;
  const [imageUpload_, setImageUpload_] = useState([]);

  return (
    <div
      className={`rounded-[6px] shadow-md bg-[#1b2730] hover:bg-[#1b2732] w-[550px] h-[120px] overflow-hidden m-2 p-2 opacity-80 relative hover:opacity-100 transition-all duration-200`}
    >
      <div
        className={`absolute bottom-0 left-0 flex flex-row justify-center items-center w-full h-[40px]`}
      >
        {/* <div
          className={`opacity-50 hover:opacity-100 transition-all duration-200 flex flex-row justify-start items-center cursor-pointer w-[80px]`}
          onClick={() => {
            setPosition_("ml-[-100px]");
            setFund_(0.1);
            if (visibility_ == "opacity-0 pointer-events-none") {
              setVisibility_("opacity-100 pointer-events-auto");
            } else if (
              visibility_ == "opacity-100 pointer-events-auto" &&
              position_ == "ml-[-100px]"
            ) {
              setVisibility_("opacity-0 pointer-events-none");
            }
          }}
        >
          <FontAwesomeIcon
            icon={faEthereum}
            className={`h-[19px] w-[19px] m-2 text-gray-400`}
            onClick={() => {}}
          />
          <p
            className={`text-white/80 transition-all duration-[800ms] font-medium text-[13px] my-1 mr-[2px] ml-[-5px] w-[15px]`}
          >
            {fund_}
          </p>
        </div> */}

        {/* <div
          className={`opacity-50 hover:opacity-100 transition-all duration-200 flex flex-row justify-start items-center cursor-pointer w-[80px]`}
          onClick={() => {
            setPosition_("ml-[-45px]");
            setSpots_("");
            if (visibility_ == "opacity-0 pointer-events-none") {
              setVisibility_("opacity-100 pointer-events-auto");
            } else if (
              visibility_ == "opacity-100 pointer-events-auto" &&
              position_ == "ml-[-45px]"
            ) {
              setVisibility_("opacity-0 pointer-events-none");
            }
          }}
        >
          <FontAwesomeIcon
            icon={faPeopleGroup}
            className={`h-[19px] w-[19px] text-gray-400 m-2`}
            onClick={() => {}}
          />
          <p
            className={`text-white/80 transition-all duration-[800ms] font-medium text-[12px] my-1 mr-[2px] ml-[-5px] w-[15px]`}
          >
            {spots_}
          </p>
        </div> */}

        {/* <div
          className={`opacity-50 hover:opacity-100 transition-all duration-200 flex flex-row justify-start items-center cursor-pointer w-[80px]`}
          onClick={() => {
            setPosition_("ml-[5px]");
            setSplit_("");
            if (visibility_ == "opacity-0 pointer-events-none") {
              setVisibility_("opacity-100 pointer-events-auto");
            } else if (
              visibility_ == "opacity-100 pointer-events-auto" &&
              position_ == "ml-[5px]"
            ) {
              setVisibility_("opacity-0 pointer-events-none");
            }
          }}
        >
          <FontAwesomeIcon
            icon={faTrophy}
            className={`h-[18px] w-[18px] text-gray-400 m-2`}
            onClick={() => {}}
          />
          <p
            className={`text-white/80 transition-all duration-[800ms] font-medium text-[13px] my-1 mr-[2px] ml-[-5px] w-[15px]`}
          >
            {split_}
          </p>
        </div> */}
      </div>

      <div
        className={`rounded-[6px] shadow-md bg-[#28343e] transition-all duration-200 w-[98%] ml-auto h-[70px] flex flex-row relative`}
      >
        <div
          className={`absolute top-0 right-0 w-full h-full flex flex-row justify-center items-center`}
        >
          <div
            className={`relative overflow-hidden w-full h-full flex flex-row justify-center items-center`}
          >
            <img
              src={`/assets/images/LwaziNF.png`}
              className={`h-[80px] object-cover invert opacity-10 rotate-[5deg] relative bottom-[35px] left-[-80px] transition-all duration-200`}
            />
            <img
              src={`/assets/images/LwaziNF.png`}
              className={`h-[160px] object-cover invert opacity-10 -rotate-[30deg] relative bottom-7 left-20 transition-all duration-200`}
            />
            <img
              src={`/assets/images/LwaziNF.png`}
              className={`h-[60px] object-cover invert opacity-5 rotate-[5deg] relative bottom-[-30px] left-[150px] transition-all duration-200`}
            />
            <img
              src={`/assets/images/LwaziNF.png`}
              className={`h-[30px] object-cover invert opacity-5 rotate-[25deg] relative bottom-[-10px] left-[-190px] transition-all duration-200`}
            />
          </div>
        </div>
        <div
          className={`transition-all duration-200 w-[50px] h-[50px] p-0 hover:p-[0.5px] rounded-[4px] mt-2 relative right-3 cursor-pointer flex flex-col justify-center items-center`}
        >
          <div
            className={`transition-all duration-200 w-full h-full rounded-[4px] bg-white/50`}
          />
        </div>
        {/* <div className={`transition-all duration-200 w-full h-[80px]`} /> */}
        <p
          className={`${
            charCount_ - current_ > 0 ? "text-white/50" : "text-red-500/80"
          } absolute bottom-2 right-16 mr-2 cursor-default transition-all duration-[800ms] font-medium text-[11px] w-[15px]`}
        >
          {charCount_ - current_}
        </p>
        <form>
          <input
            className="formInputFile"
            type="file"
            id="images"
            max="4"
            accept=".jpg,.png,.jpeg"
            onChange={(event) => {}}
            multiple
            required
            hidden
          />
          <label htmlFor="images">
            <div
              // className={}
              style={{ height: "145px" }}
              id="adhoc"
              onClick={() => {}}
            >
              <FontAwesomeIcon
                icon={faImage}
                className={`h-[18px] w-[18px] mt-[2.3px] m-2 cursor-pointer text-white/50 hover:text-white/80 transition-all duration-200 absolute bottom-0 right-1`}
                onClick={() => {
                  console.log("Uploading images..");
                  setImageUpload_([]);
                }}
              />
            </div>
          </label>
        </form>

        <a href={`#focus0`}>
          <FontAwesomeIcon
          icon={faVideo}
          className={`h-[18px] w-[18px] mt-[2.3px] m-2 cursor-pointer text-white/50 hover:text-white/80 transition-all duration-200 absolute bottom-0 right-8`}
          onClick={() => {
            console.log("Uploading video..");
          }}
        />
        </a>
      </div>
      <div
        className={`h-[27px] w-[90px] rounded-[2px] m-2 cursor-pointer bg-white/100 hover:bg-white/80 transition-all duration-200 absolute bottom-0 right-0 flex flex-col justify-center items-center`}
        onClick={() => {}}
      >
        <p className={`font-medium text-[13px]`}>Notify</p>
      </div>
      <div
        className={`w-[60px] h-[30px] rounded-[6px] shadow-md bg-[#202f3c]/90 transition-all duration-200 absolute bottom-6 left-[260px] ${position_} ${visibility_} border-solid border-[1px] border-white/10 cursor-pointer flex flex-col justify-center items-center`}
      >
        <input
          type={"text"}
          // @ts-ignore
          maxLength={`${position_ != "ml-[5px]" ? "3" : "2"}`}
          className={`w-full h-full bg-transparent text-center text-white/80 font-medium text-[13px]`}
          onChange={(e) => {
            position_ == "ml-[5px]"
              ? setSplit_(e.target.value)
              : position_ == "ml-[-45px]"
              ? setSpots_(e.target.value)
              : setFund_(parseFloat(e.target.value));
          }}
          placeholder={"???"}
        />
      </div>
      <textarea
        className={`w-[350px] absolute left-[90px] bg-transparent text-[15px] text-white/70 transition-all noBG_ duration-200 ${
          current_ < 1
            ? "opacity-60 font-normal top-[32px] h-[40px]"
            : "opacity-100 font-normal top-[10px] h-[64px]"
        }`}
        placeholder={`So Wassup?!`}
        rows={5}
        spellCheck={false}
        value={body_}
        onChange={(e) => {
          setCurrent_(e.target.value.length);
          setBody_(e.target.value);
        }}
      />
    </div>
  );
};

export default Dummy01_;

interface Dummy02_Props {}

export const Dummy02_ = ({}: Dummy02_Props) => {
  return (
    <div
      className={`rounded-[6px] shadow-md bg-white hover:bg-white min-w-[250px] h-[550px] overflow-hidden m-2 p-2 opacity-30 hover:opacity-100 transition-all duration-200 flex flex-col justify-center items-center`}
    >
      <div className={`flex flex-row justify-center items-center`}>
        <p className={`font-thin text-black/80 text-[18px] m-[2px]`}>
          Transacting with
        </p>
        <p className={`font-black text-black/80 text-[18px] m-[2px]`}>
          LwaziNF
        </p>
      </div>

      <div
        className={`w-[150px] h-[1px] border-b-[2px] border-black/10 border-dashed m-4`}
      />

      <img
        src={`data:image/png;base64,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`}
        className={`w-[250px] h-[250px] rounded-[6px]`}
      />

      <div
        className={`w-[150px] h-[1px] border-b-[2px] border-black/10 border-dashed m-4`}
      />

      <div className={`flex flex-row w-[250px] mt-[0px]`}>
        <div
          className={`font-thin text-black/50 text-[20px] w-[145px] h-[50px] bg-white/60 rounded-5 mx-[5px] flex flex-col justify-center items-center cursor-pointer transition-all duration-200 hover:bg-white`}
        >
          Transactions
        </div>
        <div
          className={`font-thin text-black/50 text-[20px] w-[145px] h-[50px] bg-white/60 rounded-5 mx-[5px] flex flex-col justify-center items-center cursor-pointer transition-all duration-200 hover:bg-white`}
        >
          Scan
        </div>
      </div>

      <div
        className={`w-[150px] h-[1px] border-b-[2px] border-black/10 border-dashed m-4`}
      />

      <div
        className={`bg-white/40 flex flex-row items-center justify-center w-[300px] h-[100px] relative p-[4px] rounded-[6px] cursor-pointer transition-all duration-400 hover:bg-white`}
      >
        <img
          src={
            "data:image/png;base64,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"
          }
          className={`w-[92px] h-[92px] rounded-[6px]`}
        />
        <div
          className={`flex flex-col items-start justify-center w-[180px] h-[80px] relative p-[4px] rounded-[6px]`}
        >
          <div className={`flex flex-row items-start justify-center relative`}>
            <p className={`font-black text-black/80 text-[18px] m-[2px]`}>
              LwaziNF
            </p>

            <p
              className={`font-medium text-black/80 text-[12px] relative top-[9px] ml-[22px]`}
            >
              0.003
            </p>
            <FontAwesomeIcon
              icon={faEthereum}
              className={`h-[19px] w-[19px] relative top-1 text-black/80`}
              onClick={() => {}}
            />
          </div>

          <p className={`text-black text-[13px] m-[2px]`}>
            From: 0xbDA57...0197E
          </p>

          <p className={`font-thin text-black/70 text-[13px] m-[2px]`}>
            14 September 2022, 14:20
          </p>
        </div>
      </div>
    </div>
  );
};
