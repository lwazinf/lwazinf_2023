import Image from 'next/image'
import Nav_ from './components/Nav_'
import Focus_ from './components/Focus_'
import Options_ from './components/Options_'

export default function Home() {
  return (
    <main className="flex min-h-screen w-[1400px] mx-auto flex-col items-center justify-start">
      <Nav_ />
      <div
          className={`w-[50px] h-[120px] bg-red-600 fixed left-0 top-[100px] cursor-pointer`}
        ></div>
      <Focus_ />
      <Options_ />
    </main>
  )
}
