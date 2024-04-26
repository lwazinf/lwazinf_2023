'use client'

import Module_ from "../components/module/Module_";

const Home = () => {
    return ( 
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#f7f7f7]">
            <Module_ topic="Cowboys" focus={[]} desc="A module for understanding" knobs={['Detail', 'Adventure', 'Mystery', 'Suspense']}/>
        </main>
     );
}
 
export default Home;