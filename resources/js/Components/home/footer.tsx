import React from "react";
import GridPattern from "@/Components/ui/grid-pattern";
import {cn} from "@/lib/utils";

const Footer = () => {

    return (
        <div>
            <div className="relative mx-auto w-full max-w-[590px] py-32 text-center max-[590px]:px-2">

                <GridPattern
                    width={30}
                    height={30}
                    x={-1}
                    y={-1}
                    className={cn(
                        "z-[-1] absolute top-0 left-0 opacity-75 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                    )}
                />

                <p className="uppercase text-base text-gray-600 font-mono font-medium mb-2">Inizia Ora</p>
                {/* Title */}
                <h2 className="font-display text-4xl font-bold leading-[1.15] mb-8">
                    Sei pronto a iniziare?
                    <br />
                    <span className="bg-gradient-to-r from-[#956AFF] via-[#D76D77] to-[#fc5713] bg-clip-text text-transparent">Partecipa ora alla Beta.</span>
                </h2>

                <a target="_blank" className="rounded-full mx-automax-w-fit border px-5 py-2 text-sm font-medium shadow-sm transition-all hover:ring-4 hover:ring-gray-200 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:ring-0 disabled:border-gray-200 border-black bg-black text-white hover:bg-gray-800" href="/beta">Iscriviti alla Beta</a>


            </div>

            <div className="w-full max-w-screen-lg mx-auto py-6 px-12 border-y border-gray-200 bg-white/70 sm:[mask-image:linear-gradient(90deg,transparent,black_7%,black_93%,transparent)]">
                <div className="relative md:flex items-center justify-between">
                    <a href="https://flowbite.com/" className="max-md:justify-center flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </a>
                    <span className="block text-pretty text-sm text-gray-500 max-md:text-center">© 2024 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.</span>
                </div>
            </div>


        </div>
    );
};

export default Footer;
