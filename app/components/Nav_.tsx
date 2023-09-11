import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPaperclip,
  faPeopleGroup,
  faPhone,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Nav_Props {}

const Nav_ = ({}: Nav_Props) => {
  return (
    <div
      className={`w-full h-[80px] flex flex-row justify-center items-center absolute top-0`}
    >
      {/* <div
        className={`min-w-[150px] h-[50px] rounded-[4px] flex flex-row justify-center items-center`}
      >
        {[
          { text: "Book Call", icon: faPhone },
          { text: "Refer a Friend", icon: faPeopleGroup },
          // { text: "Hire Me", icon: faThumbsUp },
          { text: "Connect", icon: faLinkedin },
          // { text: "", icon: faTwitter },
        ].map((obj_, index) => {
          return (
            <div
              className={`min-w-0 min-h-0 rounded-[4px] flex flex-row justify-center items-center mx-2`}
              key={index}
            >
              <div
                className={`min-w-[50px] h-full rounded-[4px] mx-1 flex flex-row justify-center items-center transition-all duration-200 opacity-50 hover:opacity-100`}
              >
                <FontAwesomeIcon
                  icon={obj_.icon}
                  className={`mx-[5px] text-[14px] text-black cursor-pointer transition-all duration-200`}
                />
                <p
                  className={`text-[13px] text-black cursor-pointer transition-all duration-200`}
                >
                  {obj_.text}
                </p>
              </div>
            </div>
          );
        })}
        <div
          className={`w-[50px] h-full bg-black/0 rounded-[4px] mx-1 ml-4`}
        ></div>
      </div> */}
      <div className={`flex flex-col justify-center items-center min-w-2 min-h-2 top-12 relative`}>
      {/* <img className={`h-[100px] object-cover opacity-80 mb-2`} src={`assets/images/LwaziNF.png`}/> */}
      {/* <p
        className={`text-[13px] text-black font-medium opacity-80 cursor-pointer transition-all duration-200`}
      >
        LwaziNF
      </p> */}
      </div>
    </div>
  );
};

export default Nav_;
