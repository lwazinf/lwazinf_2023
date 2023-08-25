"use client";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faRightLong } from "@fortawesome/free-solid-svg-icons/faRightLong";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRecoilState } from "recoil";
import { PlayState, SelectState, SelectedState } from "./atoms/atoms";
import { useRouter } from "next/navigation";
import { data_ } from "../utils/utils";
import Link from "next/link";

interface Options_Props {}

const Options_ = ({}: Options_Props) => {
  const [select, setSelect] = useRecoilState(SelectState);
  return (
    <div
      className={`w-full min-h-[400px] flex flex-col justify-start items-center px-4 mt-8`}
    >
      <div
        className={`w-full h-[50px] flex flex-row justify-between items-center rounded-[4px] m-1`}
      >
        <div className={`min-w-[150px] h-[40px] rounded-[4px] m-1`}>
          <p className={`text-[18px] font-black text-black/50`}>
            Latest Projects
          </p>
        </div>
        <div
          className={`min-w-[50px] min-h-[10px] rounded-[4px] m-1 flex flex-row justify-center items-center cursor-pointer text-pink-600 hover:text-black/50`}
        >
          <p className={`text-[13px]`}>Get featured</p>
          <FontAwesomeIcon
            icon={faRightLong}
            className={`h-[15px] w-[15px] ml-2`}
            onClick={() => {}}
          />
        </div>
      </div>
      <div
        className={`w-full min-h-0 flex flex-row justify-start items-center rounded-[4px] mb-8`}
      >
        {data_.map((obj, index) => (
          <OptionItem_ obj_={obj} idx_={`${index}`} key={index} />
        ))}
      </div>
      <div
        className={`w-full h-[50px] flex flex-row justify-between items-center rounded-[4px] m-1`}
      >
        <div className={`min-w-[150px] h-[40px] rounded-[4px] m-1`}>
          <p className={`text-[18px] font-black text-black/50`}>Case Study</p>
        </div>
        {/* <div
          className={`min-w-[50px] min-h-[10px] rounded-[4px] m-1 flex flex-row justify-center items-center cursor-pointer text-pink-600 hover:text-black/50`}
        >
          <p className={`text-[13px]`}>Get featured</p>
          <FontAwesomeIcon
            icon={faRightLong}
            className={`h-[15px] w-[15px] ml-2`}
            onClick={() => {}}
          />
        </div> */}
      </div>
      <div
        className={`w-full min-h-[300px] flex flex-row justify-start items-center m-2 mb-4`}
      >
        <div
          className={`w-full min-h-[400px] flex flex-row justify-start items-center rounded-[4px] m-1 relative overflow-hidden`}
        >
          <img
            className={`w-full h-full object-cover`}
            src={
              // @ts-ignore
              select.image
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Options_;

interface OptionItem_Props {
  obj_: object;
  idx_: string;
}

const OptionItem_ = ({ obj_, idx_ }: OptionItem_Props) => {
  const [selected_, setSelected_] = useRecoilState(SelectedState);
  const [select_, setSelect_] = useRecoilState(SelectState);
  const [playing_, setPlaying_] = useRecoilState(PlayState)
  const router = useRouter();
  const handleNav_ = () => {
    router.push("/");
  };
        // @ts-ignore
  const handleClick = (idx_) => {
    if(idx_ !== selected_){
      setSelected_(''); // Set to empty string initially

    setTimeout(() => {
      setSelected_(idx_); // Set to idx_ after 0.1 seconds
    }, 100); // 100 milliseconds = 0.1 seconds
    }

    // Other logic you might have
  };

  return (
    <div
      className={`min-w-[250px] min-h-[200px] justify-center items-start flex flex-col ${
        idx_ == selected_
          ? "opacity-100 hover:opacity-80"
          : "opacity-50 hover:opacity-30"
      } transition-all mr-6 duration-200 rounded-[4px]`}
    >
      <div
        className={`w-[350px] h-[200px] bg-black/30 rounded-[4px] m-1 relative overflow-hidden cursor-pointer`}
        onClick={() => {
          // @ts-ignore
          
          handleClick(idx_)
          setPlaying_(false)
          // @ts-ignore
          setSelect_(obj_);
          // handleNav_()
        }}
      >
        <img
          src={
            // @ts-ignore
            obj_.image
          }
          className={`w-full h-full object-cover scale-125`}
          alt="placeholder"
        />
      </div>
      <div
        className={`min-w-[150px] h-[20px] flex flex-row justify-start items-center rounded-[4px] m-1`}
      >
        <div className={`w-5 h-5 rounded-[50%] bg-black/30 mr-1`}></div>
        <p className={`text-[12px] text-black/50 tracking-[-0.5px]`}>
          {
            // @ts-ignore
            obj_.client
          }
        </p>
      </div>
      <div
        className={`w-[250px] min-h-0 flex flex-row justify-start items-start rounded-[4px] m-1`}
        onClick={() => {
          // @ts-ignore
          setSelected_(idx_);
          // @ts-ignore
          setSelect_(obj_);
          // handleNav_()
          console.log(idx_);
        }}
      >
          {/* @ts-ignore */}
        <a href={obj_.link} target="_blank" rel="noopener noreferrer">
          <p
            className={`text-[18px] hover:underline transition-all duration-200 cursor-pointer font-black text-black/80 Dressing_ text-red-800`}
          >
            {
              // @ts-ignore
              obj_.title
            }
          </p>
        </a>
      </div>
      <div
        className={`w-[350px] h-[60px] flex flex-row justify-center items-center rounded-[4px] m-1`}
      >
        <p className={`text-[12px] text-black/50 tracking-[-0.2px]`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
          ultricies sed, dolor. Cras elementum ultrices diam.
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
            obj_.type
          }
        </p>
      </div>
    </div>
  );
};
