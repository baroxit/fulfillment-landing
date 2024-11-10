import React, { useEffect } from "react";
import GridPattern from "@/Components/ui/grid-pattern";
import {cn} from "@/lib/utils";

export default function Demo() {
    useEffect(() => {
        const scriptSrc = "https://tally.so/widgets/embed.js";

        const loadTallyScript = () => {
            if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
                const script = document.createElement("script");
                script.src = scriptSrc;
                script.async = true;
                document.body.appendChild(script);
            }
        };

        loadTallyScript();
    }, []);


    return (

        <div className="relative mx-auto w-full max-w-[590px] py-20 text-center max-[590px]:px-2">

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
            <h2 className="font-display tetx-4xl sm:text-5xl font-bold leading-[1.15] mb-16">
                Sei pronto a iniziare?
                <br />
                <span className="bg-gradient-to-r from-[#956AFF] via-[#D76D77] to-[#fc5713] bg-clip-text text-transparent">Partecipa ora alla Beta.</span>
            </h2>

            <iframe
                data-tally-src="https://tally.so/embed/mRB7Z4?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="327"
                title=""
            ></iframe>

        </div>

    );
};
