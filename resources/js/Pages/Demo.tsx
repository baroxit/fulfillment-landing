import Cal, { getCalApi } from "@calcom/embed-react";
import React, { useEffect } from "react";
import GridPattern from "@/Components/ui/grid-pattern";
import {cn} from "@/lib/utils";

export default function Demo() {
    useEffect(()=>{
        (async function () {
            const cal = await getCalApi({"namespace":"demo"});
            cal("ui", {"theme":"light","styles":{"branding":{"brandColor":"#000000"}},"hideEventTypeDetails":false,"layout":"week_view"});
        })();
    }, [])
    return (
    <div>
        <div className="relative mx-auto w-full max-w-[670px] py-20 pb-16 text-center max-[670px]:px-2">

            <GridPattern
                width={30}
                height={30}
                x={-1}
                y={-1}
                className={cn(
                    "z-[-1] absolute top-0 left-0 opacity-75 [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                )}
            />

            <p className="uppercase text-base text-gray-600 font-mono font-medium">Inizia Ora</p>
            {/* Title */}
            <h2 className="font-display text-4xl sm:text-5xl font-bold leading-[1.15] mb-16">
                20 minuti per scoprire come
                <br />
                <span className="bg-gradient-to-r from-[#956AFF] via-[#D76D77] to-[#fc5713] bg-clip-text text-transparent"> migliorare le tue operazioni</span>
                .
            </h2>
        </div>
            <div className="rounded-lg border max-w-6xl mx-4 lg:mx-auto">
                <Cal namespace="demo"
                     calLink="giacomo-barilari/demo"
                     style={{width:"100%",height:"100%",overflow:"scroll"}}
                     config={{"layout":"week_view","theme":"light"}}
                     className="rounded-lg"
                />
            </div>


    </div>

    );
};
