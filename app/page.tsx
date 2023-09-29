import Image from "next/image";
import Nav_ from "./components/Nav_";
import Focus_ from "./components/Focus_";
import Options_ from "./components/Options_";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Social_ from "./components/Social_";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import Hero_ from "./components/Hero_";

export default function Home() {
  return (
    <main className="flex min-h-screen w-[1400px] mx-auto flex-col items-center justify-start">
      <Hero_/>
      <div className={`w-full h-[40px] bg-black flex flex-row justify-center items-center absolute top-0 text-white text-[15px] overflow-hidden`}>
        <FontAwesomeIcon icon={faWarning} className={`text-[15px] text-orange-500`}/>
        <p className={`mx-2 animate-pulse`}>Welcome to my portfolio, currently in development.</p>
        <FontAwesomeIcon icon={faWarning} className={`text-[15px] text-orange-500`}/>
      </div>
      <Social_ />
      <Focus_ />
      <Options_ />
    </main>
  );
}
