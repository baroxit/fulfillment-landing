import Nav from "@/Components/home/nav";
import ScreenGallery from "@/Components/home/screen-gallery";
import WordRotate from "@/components/ui/word-rotate";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import {AnimatedBeamDemo} from "@/Components/home/animatedBeamDemo";
import { BeakerIcon } from '@heroicons/react/24/outline'
import Shipments from "@/Components/home/shipments";
import Software from "@/Components/home/software";
import PickPack from "@/Components/home/pickPack";
import RetroGrid from "@/Components/ui/retro-grid";
import Footer from "@/Components/home/footer";

export default function Home() {
    return (
        <div>
        <Nav />
        <main>

            <div className="absolute h-[500px] w-full top-0 left-0 mb-[-100px]" style={{ zIndex: -1 }}>
                <RetroGrid />
            </div>

            <div className="mx-auto my-10 mt-20 max-w-lg text-center sm:max-w-xl sm:px-0 z-10">
                <a className="group mx-auto flex max-w-fit items-center justify-center gap-1 overflow-hidden rounded-full border border-gray-200 bg-white px-4 py-2 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.1)] backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50 sm:pr-7 sm:pl-4" href="#pickpack">
                    <p className="text-sm font-semibold text-gray-700 [text-wrap:balance]">🔥 Scopri la nuova funzione Pick&Pack</p>
                    <div className="group relative flex items-center">
                        <svg className="absolute transition-all group-hover:translate-x-1 group-hover:opacity-0 hidden size-3.5 sm:block" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M6.22 3.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L9.94 8 6.22 4.28a.75.75 0 010-1.06z"></path></svg>
                        <svg className="hidden size-3.5 sm:block absolute opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16" width="16" height="16"><path fill-rule="evenodd" d="M8.22 2.97a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06l2.97-2.97H3.75a.75.75 0 010-1.5h7.44L8.22 4.03a.75.75 0 010-1.06z"></path></svg>
                    </div>
                </a>
                <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading-[1.05]">Prendi il controllo della tua
                <span className="bg-gradient-to-r from-[#956AFF] via-[#D76D77] to-[#fc5713] bg-clip-text text-transparent"> logistica</span>
                </h1>
                <h2 className="mt-5 text-gray-600 sm:px-3 sm:text-lg text-pretty"> è la soluzione completa per la gestione del tuo magazzino, pensata per i brand che vogliono crescere in fretta.</h2>
                <div className="mx-auto mt-5 flex max-w-fit space-x-4">
                    <a target="_blank" className="rounded-full mx-auto max-w-fit border px-5 py-2 text-sm font-medium shadow-sm transition-all hover:ring-4 hover:ring-gray-200 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:ring-0 disabled:border-gray-200 border-black bg-black text-white hover:bg-gray-800" href="/signup">Iscriviti alla Beta</a>
                    <a className="rounded-full mx-auto max-w-fit border px-5 py-2 text-sm font-medium shadow-sm transition-all hover:ring-4 hover:ring-gray-200 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:ring-0 disabled:border-gray-200 border-gray-200 bg-white hover:border-gray-400 hover:text-gray-800 text-gray-500" href="/signup">Prova la demo</a>
                </div>
            </div>

            <ScreenGallery />


            <Software />


            <Shipments />

            <PickPack />
            <Footer />
        </main>
        </div>
    );
}
