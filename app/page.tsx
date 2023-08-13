import Image from 'next/image'
import Nav_ from './components/Nav_'
import Focus_ from './components/Focus_'
import Options_ from './components/Options_'

export default function Home() {
  return (
    <main className="flex min-h-screen w-[1400px] mx-auto flex-col items-center justify-start">
      <Nav_ />
      <Focus_ />
      <Options_ />
    </main>
  )
}
