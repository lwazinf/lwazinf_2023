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
    <main className="flex min-h-screen min-w-2 mx-auto flex-col items-center justify-start">
      <Hero_/>
      <Focus_ />
      <Options_ />
      <Social_ />
    </main>
  );
}
