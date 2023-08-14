import Image from 'next/image'
import Nav_ from './components/Nav_'
import Focus_ from './components/Focus_'
import Options_ from './components/Options_'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <main className="flex min-h-screen w-[1400px] mx-auto flex-col items-center justify-start">
      <Nav_ />
      <div
          className={`w-[50px] h-[120px] bg-red-600 fixed left-0 top-[100px] cursor-pointer`}
        >
          <p className={`relative bottom-[-75%] ml-3 text-white font-black text-[20px]`}>NF</p>
            <FontAwesomeIcon icon={faTwitter} className={`text-black/30 text-[20px] cursor-pointer relative bottom-[-100%] m-2 ml-4 hover:text-black/60 transition-all duration-200`}/>
            <FontAwesomeIcon icon={faFacebook} className={`text-black/30 text-[20px] cursor-pointer relative bottom-[-100%] m-2 ml-4 hover:text-black/60 transition-all duration-200`}/>
            <FontAwesomeIcon icon={faLinkedin} className={`text-black/30 text-[20px] cursor-pointer relative bottom-[-100%] m-2 ml-4 hover:text-black/60 transition-all duration-200`}/>
        </div>
      <Focus_ />
      <Options_ />
    </main>
  )
}
