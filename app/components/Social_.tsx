import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Social_Props {}

const Social_ = ({}: Social_Props) => {
  return (
    <div
      className={`w-[50px] min-h-[120px] fixed left-0 top-[80px] flex flex-col cursor-pointer`}
    >
      <a href="#home">
        <div
          className={`w-[50px] h-[120px] bg-red-600 flex flex-col cursor-pointer`}
        >
          <p
            className={`relative bottom-[-75%] ml-3 text-white font-black text-[20px]`}
          >
            NF
          </p>
        </div>
      </a>

      <div className={``}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/lwazinf"
        >
          <FontAwesomeIcon
            icon={faTwitter}
            className={`text-black/30 text-[20px] cursor-pointer relative bottom-[-100%] m-2 ml-4 hover:text-black/60 transition-all duration-200`}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/lwazinf"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className={`text-black/30 text-[20px] cursor-pointer relative bottom-[-100%] m-2 ml-4 hover:text-black/60 transition-all duration-200`}
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/lwazinf/"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className={`text-black/30 text-[20px] cursor-pointer relative bottom-[-100%] m-2 ml-4 hover:text-black/60 transition-all duration-200`}
          />
        </a>
      </div>
    </div>
  );
};

export default Social_;
